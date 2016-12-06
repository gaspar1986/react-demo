/**
 * 1.组件名首字母必须大写
 * 2.必须有结束标签
 * 3.属性一般由父组件使用子组件时候传入的
 * 4.this代表当前组件实例
 */
var style = {
    color:'red'
}
var Person = React.createClass({
    render(){
        return <div style={style}>
            {this.props.name}
        </div>
    }
})
ReactDOM.render(
    <div>
        <Person gender="男" name="张三"/>
        <Person gender="男" name="李四"/>
        <Person gender="男" name="王五"/>
    </div>,
    document.getElementById('app')
);