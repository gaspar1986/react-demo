/**
 * 1.组件名首字母必须大写
 * 2.必须有结束标签
 * 3.属性一般由父组件使用子组件时候传入的
 * 4.this代表当前组件实例的本身
 */
var Person = React.createClass({
    render(){
        return <div>
            {this.props.name}
        </div>
    }
})
ReactDOM.render(
    <Person gender="男" name="张三"/>,
    document.getElementById('app')
);