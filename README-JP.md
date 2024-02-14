





# 目次


[TOC]



# 使用している主な技術 



* Gatsby -v 5.12.2
* Babel
* Webpack
* Postcss
* GraphQL
* React
* material tailwind
* node.js -v 20.11.0
* tailwindcss
* MDX
* markdown
* HTML
* CSS
* Javascript
* Git
* Github
*  Webstorm


---


# 外部ドキュメントへのリンク {#外部ドキュメントへのリンク}



* [gatsby](https://www.gatsbyjs.com/)
* [React](https://react.dev/)
* [GraphQL](https://graphql.org/)
* [material tailwind](https://www.material-tailwind.com/)
* [node.js](https://nodejs.org/en)
* [tailwindcss](https://tailwindcss.com/)
* [MDX](https://mdxjs.com/)
* [markdown](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
*  [Webstorm](https://www.jetbrains.com/webstorm/)


---


# プロジェクトの概要 


---


# Gatsbyコマンド一覧

    "develop": "gatsby develop",　開発用のサーバーを立てる

    "start": "gatsby develop",　開発用のサーバーを立てる

    "build": "gatsby build", サイト公開用のソースコードを出力する

    "serve": "gatsby serve",　 公開用に出力されたソースコードを確認するためのサーバーを立てる

    "clean": "gatsby clean" キャッシュを削除する　 ディレクトリやファイル構成を変えた時や キャッシュ～ などのエラーが発生した時にこのコマンドを打つとエラーが止まったりする


---


# ディレクトリ構成 

/post/  書いたMDX記事を置くところ

/src/ ソースコード　ココを主に編集する

/public/ gatsby buildした時にココにビルドされたコードが出力される　サイトを公開するときはこの中身を公開する

/gatsby-config.js  gatsbyのプラグインをいらた時にはここに書き込むことでプラグインを動作せることができる


## /src/ディレクトリの説明

/component/ React component

/hooks/　SEO component関連

/image/ アイコンやプロフィール画像などサイト内部で共通に使用する画像をここに置いておく

/static/ faviconやwebpackで処理されたくない物を置く場所

/tamplate/ Gatsbyにとって特別なディレクトリ　gatsby-node.jsで動的に作成されたページを受け取ってこのディレクトリのファイルの指示に従ってページが出力される。

/style/ CSSやTailwindcss関連　tailwindcssをglobal.cssで上書きしているので、global.cssに普通のcssを書くと適応される。正し、tailwindcss的には良い行いではないのであまり多用しない方が良いと思う　tailwindcssでスタイリングすることを勧める


---


# 開発環境の構築方法 

[Gastby Tutorials](https://www.gatsbyjs.com/docs/tutorial/)


---


# トラブルシューティング

[https://github.com/tatsuoNakano/gatsby-starter-tricycle](https://github.com/tatsuoNakano/gatsby-starter-tricycle)


---


# 参考記事 
