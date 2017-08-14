import React from 'react';


import { NavBar, View, VLayout, HLayout, Container, ButtonGroup }  from   "../components"
import { BaseController }  from   "./common/BaseController.js"
export class ButtonGroupExample extends BaseController{

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

    onSwich(e,index) {
        console.log('点击buttongroup', index);
    }

    render() {



        return (

            <Container >

                <NavBar title="ButtonGroupExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} >


                    <HLayout >
                        <ButtonGroup mt='10'   ml='10' borderColor = '#0f0' selBgColor="#0f0" items = {['日','月','季','年'] } fontSize='18' p="10" onSwich={this.onSwich.bind(this)}>

                        </ButtonGroup>
                    </HLayout>

                </VLayout>

            </Container>

        );
    }
}


