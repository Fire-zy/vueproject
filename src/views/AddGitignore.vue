<template>
	<div>
		<!--<t-app-bar icon="fas fa-arrow-left" text="Edit the repository name"></t-app-bar>-->
		<t-icon-bar>
			<span>AddGitignore</span>
			<span>完成</span>
		</t-icon-bar>
		<div class="Add_gitignore_list">
			<ul>
				<li v-for="(list,index) in lists" :key="index" 
					:class="flag==index?'choosed':'choosed1'" 
					@click="choosePay(index)"> {{list}}
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	import TIconBar from "../components/temp/TIconBar"
	export default {
		name: 'AddGitignore',
		components: {
			TIconBar
		},
		data() {
			return {
				lists:[
					'None',
					'Actionscript',
					'Ada',
					'Agda',
					'Android',
					'AppEngine',
					'AppceleratorTitanium',
					'Autotools',
					'C',
					'C++',
					'CFWheels',
					'CMake',
					'CUDA',
					'CakePHP',
					'ChefCookbook',
					'Clojure',
					'CodeIgniter',
					'CommonLisp',
					'Composer',
					'Concrete5',
					'Coq',
					'CraftCMS',
					'D',
					'DM',
					'Dart',
					'Delphi',
					'Drupal',
					'EPiServer',
					'Eagle',
					'Elisp',
					'Elixir',
					'Elm',
					'Erlang',
					'ExpressionEngine',
					'ExtJs',
					'Fancy',
					'Finale',
					'ForceDotCom',
					'Fortran',
					'FuelPHP',
					'GWT',
					'GitBook',
					'Go',
					'Godot',
					'Gradle',
					'Grails',
					'Haskell',
					'IGORPro',
					'Idris',
					'Java',
					'Jboss',
					'Jekyll',
					'Joomla',
					'Julia',
					'KiCAD',
					'Kohana',
					'Kotlin',
					'LabVIEW',
					'Laravel',
					'Leiningen',
					'LemonStand',
					'Lilypond',
					'Lithium',
					'Lua',
					'Magento',
					'Maven',
					'Mercury',
					'MetaProgrammingSystem',
					'Nim',
					'Node',
					'OCaml',
					'Objective-C',
					'Opa',
					'OracleForms',
					'Packer',
					'Perl',
					'Phalcon',
					'PlayFramework',
					'Plone',
					'Prestashop',
					'Processing',
					'PureScript',
					'Python',
					'Qooxdoo',
					'Qt',
					'R',
					'ROS',
					'Rails',
					'RhodesRhomobile',
					'Ruby',
					'Rust',
					'SCons',
					'Sass',
					'Scala',
					'Scheme',
					'Scrivener',
					'Sdcc',
					'SeamGen',
					'SketchUp',
					'Smalltalk',
					'SugarCRM',
					'Swift',
					'Symfony',
					'SymphonyCMS',
					'TeX',
					'Terraform',
					'Textpattern',
					'TurboGears2',
					'Typo3',
					'Umbraco',
					'Unity',
					'UnrealEngine',
					'VVVV',
					'VisualStudio',
					'Waf',
					'WordPress',
					'Xojo',
					'Yeoman',
					'Yii',
					'ZendFramework',
					'Zephir',
					'gcov',
					'nanoc',
					'nanoc',
					'stella'
				],
				flag:-1,
				gitignore:''
			}
		},
		created() {
		},
		methods:{
			choosePay (index) {
				this.flag = index
	     	this.gitignore = this.lists[index]
//	     	this.$emit('input',this.gitignore)
	     	this.$router.push(`/CreateNewRepo?gitignore=${this.gitignore}`)
			},
		}
	}
</script>

<style scoped>
	ul,li{
   display: flex;
   flex-wrap: wrap;
  }
  li{
    width:29%;
    word-wrap: break-word;
    word-break: break-word;
    margin:5px 5px;
    padding:10px 0;
    font-size: 0.8em;
    border-radius: 5px;
    justify-content: center;
		align-items: center;
  }
  .choosed{
    color: #fff;
    border: 1px solid #0e93f6;
    background-color: #0e93f6;
  }
  .choosed1{
    color: #7c7e7e;
    border: 1px solid #7c7e7e;
  }

</style>