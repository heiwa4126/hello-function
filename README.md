# hello-function

チュートリアル [Visual Studio Code を使用して Azure で初めての関数を作成する](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-create-first-function-vs-code)にあるように

- [Azure CLI](https://docs.microsoft.com/ja-jp/cli/azure/install-azure-cli?view=azure-cli-latest)
- [Node.js](https://nodejs.org/) 推奨は8.xか10.x
- [Visual Studio Code](https://code.visualstudio.com/)
- [Azure Functions Core Tools](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-run-local#v2) 2.x
- VSCodeに [Azure Functions 拡張機能](vscode:extension/ms-azuretools.vscode-azurefunctions)

という開発環境を使って作ったAzure Functionsのサンプルコード。

これを、
[Azure Functions の zip プッシュ デプロイ](https://docs.microsoft.com/ja-jp/azure/azure-functions/deployment-zip-push)
のようにデプロイできるか試す。

テスト用にnodejsのモジュールとして、
[MikeMcl/decimal.js: An arbitrary-precision Decimal type for JavaScript](https://github.com/MikeMcl/decimal.js)
と、関数の1個上に意味のあまりないモジュールfoo1を呼ぶような構成になっている。

https://hello-XXXX.azurewebsites.net/api/HttpTrigger1?code=XXXXXX を呼んで
```
Hello, world! 1+2=3, 10000/3=3333.3333333333335
```
みたいのが帰ればOK