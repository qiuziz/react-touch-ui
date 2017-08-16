import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "../View"
import Utils from   "../common/Utils.js"
import  './Input.scss'

import IOSearch from 'react-icons/lib/io/ios-search';
import { Layout }  from   "../Layout"
import  Config   from   "../common/Config.js"

export class Input extends React.Component {
    static defaultProps = {
        fontSize: Config.InputFontSize,
        fontColor: Config.InputFontColor,
        h: Config.InputH
    };

    constructor(props) {
        super(props);

        const {
            fontSize,
            fontColor,
            h, value,
            maxLength,
            } = this.props;

        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            h: h,
            value: value,
            maxLength: maxLength
        };
    };

    handle(e) {
        var value = e.target.value;
        this.setState({value: value});
        this.state.onChange(e, value)
    };


    renderSearch(inputStyle, type, placeholder, props) {

        var IORadioIcon;

        return (
            <Layout
                flexDirection="row"
                justifyContent="flex-start"
                h={this.props.h}
                className="aui-searchinput-outline">

                <Layout alignSelf="center" mr="3">
                    <IOSearch size={30}/>
                </Layout>

                <input
                    style={inputStyle}
                    type={type}
                    className="aui-input"
                    placeholder={placeholder}
                    value={this.state.value}
                    onChange={this.handle.bind(this)}
                    data-input-clear="1"
                    data-input-search="1"
                    {...props} />
            </Layout>
        )

    }

    renderCommon(inputStyle, type, placeholder, props) {

        return (
            <View className="aui-input-outline" >
                <input
                    style={inputStyle}
                    type={type}
                    className="aui-input"
                    placeholder={placeholder}
                    maxLength={this.state.maxLength }
                    value={this.state.value}
                    onChange={this.handle.bind(this)}
                    data-input-clear="1"
                    data-input-search="1"
                    {...props}/>
            </View>
        );
    }

    render() {
        const {
            fontSize,        // 字体大小
            fontColor,       // 字体颜色
            onChange,
            type,
            placeholder,     // 提示字
            ...props
            } = this.props;

        this.state.onChange = onChange;

        var h = this.state.h;
        var hStyle;

        if (h) {
            var lineHeight = h;
            hStyle = assign(
                Utils.kvSize("lineHeight", h -2),
                Utils.kvSize("height", h-2)
            )
        }
        const inputStyle = assign(
            //   {-webkit-appearance:none},
            {color: this.state.fontColor},
            Utils.kvSize('fontSize', this.state.fontSize),
            hStyle
        );

        if (type == "search") {
            return this.renderSearch(inputStyle, type, placeholder, props);
        } else {
            return this.renderCommon(inputStyle, type, placeholder, props);
        }


    }
}


