import { getTsConfigPath, migrate } from "core/util/paths";
import { Telemetry } from "core/util/posthog";
import path from "path";
import * as vscode from "vscode";
import { VsCodeExtension } from "../extension/vscodeExtension";
import registerQuickFixProvider from "../lang-server/codeActions";
import { getExtensionVersion } from "../util/util";
import { getExtensionUri } from "../util/vscode";
import { setupInlineTips } from "./inlineTips";

export async function activateExtension(context: vscode.ExtensionContext) {
  // Add necessary files
  getTsConfigPath();

  // Register commands and providers
  registerQuickFixProvider();
  setupInlineTips(context);

  const vscodeExtension = new VsCodeExtension(context);

  migrate("showWelcome_1", () => {
    // move pearai extension to auxiliary bar (we want secondary side bar to be default loaction for extension)
    vscode.commands.executeCommand('workbench.action.movePearExtensionToAuxBar');

    vscode.commands.executeCommand(
      "markdown.showPreview",
      vscode.Uri.file(
        path.join(getExtensionUri().fsPath, "media", "welcome.md"),
      ),
    );
    vscode.commands.executeCommand("pearai.continueGUIView.focus");
  });

  // Load PearAI configuration
  if (!context.globalState.get("hasBeenInstalled")) {
    context.globalState.update("hasBeenInstalled", true);
    Telemetry.capture("install", {
      extensionVersion: getExtensionVersion(),
    });
  }
}
