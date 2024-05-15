module.exports = {
    title: 'Attest Documentation',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact'},
 
            ],
            sidebar:[
                {
                text: 'Attest Installation',
                collapsed: false,
                    items: [
                      { text: 'Attest Installation', link: '/about/attestinstallation' } 
                    ]
                },

                {
                    text: 'Attest Functionalities',
                    collapsed: false,
                        items: [
                          { text: 'Attest Track', link: '/about/attesttrack' } ,
                          { text: 'Attest Functions', link: '/about/attestfunctions' } ,
                        ]
                },
                {
                    text: 'Attest func',
                    collapsed: false,
                        items: [
                          { text: 'Attest Functions', link: '/attestfunc' } ,
                        ]
                },
                
                ],
    }
}