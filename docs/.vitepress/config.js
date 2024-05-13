

module.exports = {
    title: 'Attest',
    
    themeConfig: {
        logo: '/Attestlogo.png',
        
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Contact', link: '/contact'},
 
            ],
            sidebar:[
               
                {
                    text: 'Attest Functionalities',
                    collapsed: false,
                    items: [
                        {
                            text: 'Configuration',
                            collapsed: true,
                            items: [
                                { text: 'Track', link: '/about/attesttrack' },
                            
                            ]
                        },
                        
                         
                    ]
                },
            
                
                ],
    }
}