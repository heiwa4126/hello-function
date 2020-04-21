# hello-function

チュートリアル [Visual Studio Code を使用して Azure で初めての関数を作成する](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-create-first-function-vs-code)にあるように

- [Azure CLI](https://docs.microsoft.com/ja-jp/cli/azure/install-azure-cli?view=azure-cli-latest)
- [Node.js](https://nodejs.org/) 推奨は8.xか10.x
- [Visual Studio Code](https://code.visualstudio.com/)
- [Azure Functions Core Tools](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-run-local#v2) 2.x
- VSCodeに [Azure Functions 拡張機能](vscode:extension/ms-azuretools.vscode-azurefunctions)

という開発環境を使って作ったAzure Functions(関数アプリ)のサンプルコード。

これを、
[Azure Functions の zip プッシュ デプロイ](https://docs.microsoft.com/ja-jp/azure/azure-functions/deployment-zip-push)
のようにデプロイできるか試す。

Node.jsを使うのは、Pythonを使うとAzureの安いプラン(消費量、従量課金プラン、`Consumption plan`)が選べないから。
(従量課金プランが選べるのはJava, .NET Core, Powershell CoreそれにNode.js)

またAzure FunctionsではGitHubでtag打つとデプロイ、
みたいなことが出来るので(一例。トリガは他にもいろいろある)
それも調査する。

テスト用にnodejsのモジュールとして、
[MikeMcl/decimal.js: An arbitrary-precision Decimal type for JavaScript](https://github.com/MikeMcl/decimal.js)
と、サンプルとして関数の1個上に意味のあまりないモジュールfoo1を呼ぶような構成になっている。

https://hello-XXXX.azurewebsites.net/api/HttpTrigger1?code=XXXXXX を呼んで
```
Hello, world! 1+2=3, 10000/3=3333.3333333333335
```
みたいのが帰ればOK。


# 対象バージョン

```
$ LANG=C date ; func --version
Tue Apr 21 10:23:45 JST 2020
2.7.2184
```

[Azure Functions runtime versions overview | Microsoft Docs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-versions#languages) によると、Functions 3.xでNode.js10,12が


# 参考

- [HTTP 要求に応答する関数を Azure で作成する | Microsoft Docs](https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-create-first-azure-function-azure-cli?tabs=bash%2Cbrowser&pivots=programming-language-javascript)
