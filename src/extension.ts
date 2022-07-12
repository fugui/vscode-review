// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require('path');
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const reviewDecorationType = vscode.window.createTextEditorDecorationType({
		backgroundColor: 'green',
		border: '2px solid white',
		before: {
			//contentIconPath: vscode.Uri.joinPath( context.extensionUri, 'resources/review.ico')
			contentText: 'R'
		}
	});
	
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "wushan" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('wushan.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		const editor = vscode.window.activeTextEditor;
		if( !editor) {
			return;
		}
		const selection = editor.selection;
		
		editor.setDecorations(reviewDecorationType,  [{
			range: new vscode.Range(selection.start, selection.end),
			hoverMessage: 'Comments by FuGui at 2021-05-28'
		}] );

		vscode.window.showInformationMessage('Add Review Comments for: ' + editor.document.getText(selection) + ', position:' + Object.values(selection) );
		vscode.commands.executeCommand( "wushan-addcomment.focus");


	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
