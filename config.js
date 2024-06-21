var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNseG9xNHBwODBma3kyc3Fyd3JhYmtmeGcifQ.ME8u7SSIIraADloYWQPduw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:\'Source Serif Pro\'; font-weight: 300; padding: 0.1vh; border-radius: 5px; color: #ffffff; font-size: 1.5rem; display: block; margin-bottom: 1px;">VALURI DE CĂLDURĂ ÎN ROMÂNIA</span>',
    subtitle: '<span style="font-family: \'Source Serif Pro\'; color: #ffffff; font-size: 4rem; font-weight: 600;"> CUM NE AFECTEAZĂ <span style="font-weight: 400; animation: colorFade 6s infinite;" class="outlined">ÎNCĂLZIREA GLOBALĂ</span></span>',

    byline: '<p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 15 mai 2024 <br> Sursa datelor: ',
    chapters: [
        {
            id: 'cap0',
            daysAgo: 80,
            showTimeline: false,
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            description: '',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap1.1',
            daysAgo: 80,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Încălzirea globală nu mai reprezintă o previziune îndepărtată; efectele sale sunt deja evidente în prezent. În România, o creștere a temperaturii medii anuale cu doar 1,5 grade Celsius are consecințe semnificative asupra climatului, sănătății publice și economiei. Este dificil să vizualizăm implicațiile încălzirii globale fără un punct de referință și și mai dificil să ne gândim la efecte fără comparații.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {callback: 'createSnowflakes',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap1',
            daysAgo: 80,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Să ne imaginăm următorul scenariu: două personaje de vârstă apropiată. Primul personaj trăiește în 1940, iar al doilea este contemporan cu noi.',
            overlayImage: 'stateone.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {callback: 'createSnowflakes',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap2',
            daysAgo: 80,
            showTimeline: false,
            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Iernile din România anilor 1940 erau cunoscute pentru temperaturile lor scăzute, ninsorile abundente și perioadele lungi de frig intens. În acea perioadă, zăpada era o prezență constantă pe durata iernii, iar gerurile năprasnice erau obișnuite.',
            overlayImage: 'statewinter.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap3',
            daysAgo: 80,
            showTimeline: false,
            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În contrast, iernile de astăzi sunt mult mai blânde, cu temperaturi medii mai ridicate și ninsori mai rare și mai puțin consistente. Schimbările climatice au dus la o scădere a frecvenței și intensității fenomenelor de iarnă, iar perioadele de îngheț sunt mai scurte și mai puțin severe. ',
            overlayImage: 'statewinterchart.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap4',
            daysAgo: 20,
            showTimeline: false,            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În anii 1940, primăverile erau caracterizate printr-o tranziție lentă de la iarnă la vară, cu temperaturi reci care persista până târziu în aprilie și chiar mai, și cu ploi consistente',
            overlayImage: 'statespringchart.png',
            location: {
                // center: [31.2718321, 49.4871968],
                // zoom: 5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap5',
            daysAgo: 20,
            showTimeline: false,
            alignment: 'center',
            
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Verile din România au suferit transformări notabile de-a lungul decadelor, devenind din ce în ce mai lungi și mai toride. În anii 1940, verile erau temperate, cu temperaturi medii mai suportabile. În luna lui cuptor (iulie) din 1940, temperatura medie lunară era de 19,8 grade Celsius. În contrast, în 2023, temperatura medie lunară în aceeași perioadă a crescut la 22,3 grade Celsius.',
            overlayImage: 'statesummerchart.png',
            location: {
                // center: [31.2718321, 49.4871968],
                // zoom: 5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'cap6',
            daysAgo: 700,
            showTimeline: false,
            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Toamnele din România au suferit schimbări semnificative din cauza încălzirii globale. În anii 1940, toamnele erau caracterizate de o tranziție lină de la vară la iarnă, cu temperaturi moderate și ploi previzibile. Astăzi, temperaturile fluctuează brusc, perioadele de căldură se prelungesc, iar ploile sunt neregulate, alternând între secetă și precipitații intense. ',
            overlayImage: 'statefallchart.png',
            location: {
                // center: [31.2718321, 49.4871968],
                // zoom: 5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap7',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Din 1940 până în prezent, temperatura medie anuală a crescut treptat, cu mici variații. În 2023 s-a înregistrat o temperatură medie anuală de 11.6 grad Celsius. ',
            overlayImage: 'primul.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap7.1',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'doilea.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap7.2',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'treilea.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap7.3',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'patrulea.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },

        {
            id: 'cap7.4',
            daysAgo: 365,
            showTimeline: false,
            
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: ' ',
            overlayImage: 'cincilea.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },


        {
            id: 'cap8',
            daysAgo: 22,
            showTimeline: false,
            
            triggerCustomScroll: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18179201/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18179201/?utm_source=embed&utm_campaign=visualisation/18179201" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },




        {
            id: 'cap9',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Principalul indicator pe care îl folosim pentru a monitoriza încălzirea globală este anomalia de temperatură. Acest indicator nu ne arată temperatura absolută într-o anumită lună, ci cât de diferită este în comparație cu temperaturile istorice.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        
        
        },

        
        {
            id: 'cap10',
            daysAgo: 700,
            showTimeline: false,           
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Această anomalie trebuie măsurată în raport cu o bază de referință a temperaturii. Baza de referință este, de obicei, stabilită prin calcularea mediei temperaturilor pe parcursul mai multor decenii. O anomalie pozitivă indică temperaturi mai ridicate decât baza de referință, în timp ce o anomalie negativă arată condiții mai reci. Pentru analiza noastră, am selectat perioada 1991-2020 ca referință, care este perioada de bază implicită a ECMF. ',
            overlayImage: 'blank.png',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        
        {
            id: 'cap11',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18171982/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18171982/?utm_source=embed&utm_campaign=visualisation/18171982" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap9.1',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Ce înseamnă acest lucru și cum ne afectează?', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Anomaliile de temperatură s-au accentuat semnificativ în ultimele decenii, provocând fluctuații extreme între perioade de căldură intensă și valuri de frig neobișnuite. Aceste schimbări climatice destabilizează ecosistemele, afectează productivitatea agricolă și pun presiune pe resursele de apă. În plus, cresc riscurile pentru sănătatea publică, agravează infrastructura și intensifică fenomenele meteorologice extreme.',
            overlayImage: 'pamant.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        
        
        },

        {
            id: 'cap12',
            daysAgo: 731,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Disconfortul termic', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală contribuie semnificativ la creșterea disconfortului termic resimțit de oameni. Pe măsură ce temperaturile medii globale cresc, valurile de căldură devin mai frecvente și mai intense. Aceste condiții extreme afectează capacitatea organismului uman de a-și regla temperatura internă, crescând riscul de epuizare termică și insolație. În plus, creșterea umidității relative agravează senzația de căldură, făcând ca perioadele de vară să devină și mai greu de suportat. Efectele disconfortului termic se resimt nu doar la nivel fizic, ci și psihologic, afectând productivitatea și starea generală de bine a populației. ',
            overlayImage: 'batrani.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap12.1',
            daysAgo: 731,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În primele două decenii ale secolului 21, Europa a experimentat episoade de valuri de căldură prelungite și excepționale, cu temperaturi record în multe regiuni. O clasificare formală a primelor 10 valuri de căldură din Europa, care au avut loc între 1950 și 2015, a indicat că 6 dintre cele mai importante episoade s-au petrecut în ultimii 15 ani. De exemplu, vara anului 2003 din vestul și centrul Europei, considerată una dintre cele mai fierbinți veri europene de la anul 1500, a dus la peste 70.000 de decese',
            overlayImage: 'batrani.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap12.2',
            daysAgo: 731,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18468450/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18468450/?utm_source=embed&utm_campaign=visualisation/18468450" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'batrani.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap13',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<img src="ziledisconfort.png">',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap13.1',
            daysAgo: 760,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18467368/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18467368/?utm_source=embed&utm_campaign=visualisation/18467368" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap14',
            daysAgo: 650,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Creșterea mortalității', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală contribuie semnificativ la creșterea mortalității în exces prin intensificarea și prelungirea perioadelor de căldură extremă. Temperaturile ridicate și valurile de căldură devin din ce în ce mai frecvente și mai severe, afectând în mod disproporționat persoanele vârstnice, copiii și cei cu afecțiuni preexistente. Aceste condiții extreme suprasolicită capacitatea organismului de a-și menține o temperatură internă stabilă, ducând la probleme grave de sănătate, cum ar fi epuizarea termică și insolația. De exemplu, valurile de căldură din Europa au provocat zeci de mii de decese suplimentare în ultimii ani, iar previziunile indică o agravare a acestei tendințe.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap15',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18181766/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18181766/?utm_source=embed&utm_campaign=visualisation/18181766" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        
        {
            id: 'cap18',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Insula de căldură urbană', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Insula de căldură urbană apare când zonele urbane devin mai calde decât cele rurale din cauza activităților umane și a infrastructurii. Suprafețele pavate și clădirile rețin căldura, iar emisiile de la vehicule și industrie contribuie la creșterea temperaturilor. Acest fenomen agravează disconfortul termic, problemele de sănătate legate de căldură și crește consumul de energie pentru răcire. De asemenea, poate deteriora calitatea aerului. Pentru a reduce efectele insulei de căldură, orașele pot crește suprafețele verzi, folosi materiale reflectorizante și promova transportul durabil.',
            overlayImage: 'pamant.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },
        

        {
            id: 'cap18.1',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În anul 2015, în cele 93 de orașe studiate, locuiau în total 57.896.852 de persoane cu vârsta de peste 20 de ani. Populația orașelor varia de la 95.242 de locuitori în Tartu, Estonia, la 8.011.216 de locuitori în Londra, Marea Britanie, cu o valoare mediană de 624.495 de locuitori. În total, au fost raportate 555.215 decese din toate cauzele în același an, dintre care 23,1% (n=128.269) au avut loc între iunie și august. Temperatura medie de vară a variat între 14,2°C în Glasgow, Marea Britanie, și 29,7°C în Sevilla, Spania, cu temperaturi maxime medii variind între 22,7°C în Tallinn, Estonia, și 36,8°C în Sevilla, Spania. Media ponderată a UHI (Urban Heat Island) zilnică pe orașe, din iunie până în august, a fost de 1,5°C (interval pe orașe 0,5°C - 3,0°C), cu valori maxime pe celulă de grilă ajungând la 4,1°C în Cluj-Napoca, România.',
            overlayImage: 'pamant.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap18.2',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În toate orașele studiate, aproape 75% și 20% din populație (57 milioane și respectiv 14 milioane de locuitori) trăiau în zone cu o intensitate a insulei de căldură urbană (UHI) de peste 1ºC și 2ºC. În total, 6.700 de decese premature (95% CI 5.254 - 8.162) ar putea fi atribuite UHI în timpul verii (4,3% din mortalitatea de vară și 1,8% din mortalitatea anuală) și 2.644 de decese premature (95% CI 2.444-2.824) ar putea fi prevenite prin creșterea TC la 30% (1,8% din mortalitatea de vară și 0,4% din mortalitatea anuală). Acest lucru reprezintă, în medie, 39,5% din decesele atribuite UHI.',
            overlayImage: 'pamant.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap18.3',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18467595/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18467595/?utm_source=embed&utm_campaign=visualisation/18467595" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },
        {
            id: 'cap18.3',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18468047/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18468047/?utm_source=embed&utm_campaign=visualisation/18468047" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },


        {
            id: 'cap19',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Agricultura', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încălzirea globală are un impact semnificativ asupra agriculturii în România, afectând productivitatea și calitatea culturilor. Schimbările climatice duc la creșterea frecvenței și intensității fenomenelor meteorologice extreme, cum ar fi seceta, inundațiile și valurile de căldură, care pot distruge recoltele și solurile agricole. Temperaturile ridicate și precipitațiile neregulate perturbă ciclurile de creștere ale plantelor și reduc disponibilitatea apei, esențială pentru irigații. ',
            overlayImage: 'pamant.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap20',
            daysAgo: 20,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/18184560/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/18184560/?utm_source=embed&utm_campaign=visualisation/18184560" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'pamant.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap21',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Ce putem face', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pentru a combate efectele încălzirii globale asupra agriculturii în România, este esențial să adoptăm măsuri de adaptare și mitigare. Printre aceste măsuri se numără dezvoltarea și implementarea tehnologiilor agricole sustenabile, precum irigațiile eficiente și utilizarea culturilor rezistente la secetă. De asemenea, promovarea practicilor agricole prietenoase cu mediul, cum ar fi rotația culturilor și utilizarea fertilizatorilor organici, poate îmbunătăți sănătatea solului și rezistența acestuia la schimbările climatice. ',
            overlayImage: 'pamant.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


















        


        
        

    ]
};