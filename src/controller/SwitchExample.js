import React from 'react';

import { BaseController }  from   "./common/BaseController.js"
import { NavBar, View, VLayout, HLayout, Container, Button, Switch }  from   "../components"
export class SwitchExample extends BaseController {

    /*
     * 功能 : 构造函数 可以定义state变量
     */
    constructor(props) {
        super(props);

    }
    /*
     * 功能 : 组件渲染完成通知函数
     * 注意 : 一定要调用super.componentDidMount();  或者把这个通知去掉
     */
    componentDidMount() {
        super.componentDidMount();
    }
    /*
     * 功能 :  组件恢复显示通知函数
     * 注意 :  A调到B  B在返回的时候 A会收到此通知
     */
    componentResume () {
        super.componentResume();
    }
    /*
     * 功能 :  组件暂停显示通知函数
     * 注意 :  A调到B   A会收到此通知
     */
    componentPause () {
        super.componentPause();
    }
    /*
     * 功能 :  组件被卸载通知函数
     */
    componentWillUnmount () {
        super.componentWillUnmount();
    }



    onTouchTapBack(e) {
        this.props.navigationController.popView()
    }

    onSwitch(e, index) {
        console.log('点击buttongroup', index);

    }

    render() {


        return (

            <Container >

                <NavBar title="SwitchExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} >


                    <Switch mt='10' ml='10' onSwitch={this.onSwitch.bind(this)} >

                    </Switch>


                </VLayout>

            </Container>

        );
    }
}


