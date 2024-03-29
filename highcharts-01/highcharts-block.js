wp.blocks.registerBlockType('highcharts/chart', {
    title: 'Highcharts Custom Block',
    icon: 'hammer',
    category: 'design',
    attributes: {
        companyName: {type: 'string'},
        companyPhone: {type: 'string'},
        companyAddress: {type: 'string'},
        companyAddress2: {type: 'string'},
        companyCity: {type: 'string'},
        companyState: {type: 'string'},
        companyZip: {type: 'string'},
    },

    edit: function(props){
            function updateCompanyName(event){ props.setAttributes({companyName : event.target.value}) }
            function updateCompanyPhone(event){ props.setAttributes({companyPhone : event.target.value}) }
            function updateCompanyAddress(event){ props.setAttributes({companyAddress : event.target.value}) }
            function updateCompanyAddress2(event){ props.setAttributes({companyAddress2 : event.target.value}) }
            function updateCompanyCity(event){ props.setAttributes({companyCity : event.target.value}) }
            function updateCompanyState(event){ props.setAttributes({companyState : event.target.value}) }
            function updateCompanyZip(event){ props.setAttributes({companyZip : event.target.value}) }

            return React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Company Name"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyName,
              placeholder: "Company Name",
              onChange: updateCompanyName
            })), React.createElement("div", null, React.createElement("label", null, "Company Phone"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyPhone,
              placeholder: "Company Phone",
              onChange: updateCompanyPhone
            })), React.createElement("div", null, React.createElement("label", null, "Company Address"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyAddress,
              placeholder: "Company Address",
              onChange: updateCompanyAddress
            })), React.createElement("div", null, React.createElement("label", null, "Company Address 2"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyAddress2,
              placeholder: "Company Address 2",
              onChange: updateCompanyAddress2
            })), React.createElement("div", null, React.createElement("label", null, "Company City"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyCity,
              placeholder: "Company City",
              onChange: updateCompanyCity
            })), React.createElement("div", null, React.createElement("label", null, "Company State"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyState,
              placeholder: "Company State",
              onChange: updateCompanyState
            })), React.createElement("div", null, React.createElement("label", null, "Company Zip"), React.createElement("br", null), React.createElement("input", {
              type: "text",
              value: props.attributes.companyZip,
              placeholder: "Company Zip",
              onChange: updateCompanyZip
            })));
    },
    save:function(props){
        return  React.createElement(
            "div",
            null,
             React.createElement("h3", null, props.attributes.companyName),
             React.createElement("div", null, props.attributes.companyPhone),
             React.createElement(
              "span",
              null,
              props.attributes.companyAddress
            ),
             React.createElement(
              "span",
              null,
              props.attributes.companyAddress2
            ),
             React.createElement(
              "div",
              null,
               React.createElement(
                "span",
                null,
                props.attributes.companyCity
              ),
               React.createElement(
                "span",
                null,
                props.attributes.companyState
              ),
               React.createElement("span", null, props.attributes.companyZip)
            ),
             React.createElement("script", {
              src: "https://code.highcharts.com/highcharts.src.js"
            }),
             React.createElement("div", {
              id: "container"
            })
          );
    }

})