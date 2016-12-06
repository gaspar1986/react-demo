//创建一个自定义的组件
/**
 * 方便引用
 * 方便修改
 * 渲染的时候是整体覆盖，而不是追加
 */
var Message = React.createClass({
    //有一个返回值,表示此组件如何被渲染
    render(){
        return <div>Hello</div>
    }
})
//只有调用render的时候才会创建一个组件的实例
ReactDOM.render(
    <Message />,
    document.getElementById('app'));