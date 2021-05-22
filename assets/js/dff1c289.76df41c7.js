(self.webpackChunklandingpage=self.webpackChunklandingpage||[]).push([[792],{5544:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return d},default:function(){return u}});var o=t(2122),a=t(9756),s=(t(7294),t(3905)),i={sidebar_position:1},r={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-extras/manage-docs-versions.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},d=[{value:"Create a docs version",id:"create-a-docs-version",children:[]},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[]},{value:"Update an existing version",id:"update-an-existing-version",children:[]}],l={toc:d};function u(e){var n=e.components,i=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,s.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,s.kt)("p",null,"Release a version 1.0 of your project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,s.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,s.kt)("p",null,"Your docs now have 2 versions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,s.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,s.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,s.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,s.kt)("p",null,"Modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,s.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Docs Version Dropdown",src:t(8730).Z})),(0,s.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,s.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},8730:function(e,n,t){"use strict";n.Z=t.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);