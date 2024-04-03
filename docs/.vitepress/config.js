

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
                      { text: 'Attest Installation', link: '/about/Attest-installation' } 
                    ]
                },

                {
                    text: 'Attest Functionalities',
                    collapsed: false,
                        items: [
                          { text: 'Attest Track', link: '/about/Attest-Track' } ,
                          { text: 'Attest Functions', link: '/about/Attest-Functions' } ,
                        ]
                },
                
                ],
    }
}