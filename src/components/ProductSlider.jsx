import React from "react";
import Slider from "react-slick";
import "./ProductSlider.css";

const product1 = [
  {
    title: "03.01.2019",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/49101874_593800551072764_3304833873774379008_o.jpg?_nc_cat=103&_nc_oc=AQkQ8aa3xkpXhjwiIXx6Rcnq1-pBd2osROnATp_QT0oxoX7FSU9_MH_RN_s5mCJM0w0&_nc_ht=scontent.fhan2-1.fna&oh=d72b0992546b6a282292c02cb6bd3e19&oe=5CB5A047"
  },
  {
    title: "18.11.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/46494536_566719247114228_4342340450267430912_o.jpg?_nc_cat=102&_nc_oc=AQnrWyVHdXY4Ve1VdSM9rxMfO1VDBkvlrz46gdo4r0Wt2ruFi8cIFG0ryApdjw1Rips&_nc_ht=scontent.fhan2-1.fna&oh=c12e0e7ed53fec721427b4db7044d846&oe=5CF30D02"
  },
  {
    title: "07.11.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/45564886_560665891052897_5182276177502404608_o.jpg?_nc_cat=106&_nc_oc=AQn0TFg7BlKXMp02S2mHqk5QcES5nu6Bfb98atKQD1kIPjBagzYwR523RQJKBCet7rg&_nc_ht=scontent.fhan2-1.fna&oh=790414cfd0a8ddc5a01b9f8a9c3c97c8&oe=5CBC0AD3"
  },
  {
    title: "07.11.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/45544089_560665877719565_7429910173558243328_o.jpg?_nc_cat=100&_nc_oc=AQkk7Wd2VP4KHUQLFTURkPHgbPuhhzMbh466kz5dtg66G-XHzapFagTwiGC3QozaBvE&_nc_ht=scontent.fhan2-4.fna&oh=d26615c0635aa8571853e34212b972b3&oe=5CB4E5D0"
  },
  {
    title: "29.09.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/42705699_541539976298822_8556734666600611840_o.jpg?_nc_cat=110&_nc_oc=AQmNHP5M87iEEhcpz6sedGB1dsaU8GWi8ZUz6sOGwl9pqQlLO87yyjeE9JbKIct9Ox8&_nc_ht=scontent.fhan2-4.fna&oh=0f1a7c402391e4e51e40d3da44c72015&oe=5CFBE566"
  },
  {
    title: "26.09.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/42677569_540352636417556_3580569751975362560_o.jpg?_nc_cat=100&_nc_oc=AQkKr0no34oP-BP8UfSpbpWTu6uHLFU4AG-JAlDw1DNr_GZJtv-PO_PzN6SHTkJ3HNU&_nc_ht=scontent.fhan2-4.fna&oh=ca226fbd3d4e4277acd47ab6cc0bff86&oe=5CF3F16E"
  },
  {
    title: "22.08.2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/39834855_521621581623995_4384877737647538176_o.jpg?_nc_cat=108&_nc_oc=AQmZrfxGaQt_x2mVL6s6kgjANf5zA4EP_fp89lOpT1KewEUUpNnskFCgLN_E-JE0a88&_nc_ht=scontent.fhan2-3.fna&oh=9c9223ce9ccb12d696e109f838718df8&oe=5CFB2539"
  },
  {
    title: "16.08.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/37549534_515449272241226_2504999306994384896_o.jpg?_nc_cat=110&_nc_oc=AQknK0UG5upMULFbxkLzwoYyP7SQ9926M785H7oL0xI3qSwrwAtCB29SE2bl7FC9oHk&_nc_ht=scontent.fhan2-4.fna&oh=d43b4aaec5f80639944620f7d5e9df6f&oe=5CFBD2B1"
  },
  {
    title: "10.08.2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/38851711_509313739521446_3765325325060276224_o.jpg?_nc_cat=108&_nc_oc=AQnBQjlwfTeXSwcEx6GI0TF9m-uBx-ke-WOLWu-8pmwm7LiRMXab9CY3ggzZ2XK_qKQ&_nc_ht=scontent.fhan2-3.fna&oh=6f7e9103971ffc49e3fd55783c5e7055&oe=5CFDB8B7"
  },
  {
    title: "09.08.2018",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/38864885_508344806285006_7645466846908383232_o.jpg?_nc_cat=111&_nc_oc=AQl4uq8EVc9wDf-CWLnc6rR6UJZ5C1Kti9t9WTkIACKOU_jqdkutdf3VuYzCAhIpf0E&_nc_ht=scontent.fhan2-2.fna&oh=8ada62c921fbf99f0a9a35cf81de50ea&oe=5CEEF593"
  },
  {
    title: "31.07.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/38118449_499242207195266_6710054194251825152_n.jpg?_nc_cat=102&_nc_oc=AQmznqt-Nb2K5-JxRTDf9z_-ug-hyqF2LU7PYJw5oi7Edpddzv5Kw5L44XhU2PpQ1Ro&_nc_ht=scontent.fhan2-1.fna&oh=36facbcb62fbd359db16157cf9cadca5&oe=5CC099AF"
  },
  {
    title: "16.07.2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/37377459_486312018488285_6026537052768567296_o.jpg?_nc_cat=108&_nc_oc=AQnPauduDy1Di_7O3nnC5WgWcNcSZ-ZRiUN7Zt362WKHDsG0sRs_Etr_LYoVEs4YWzE&_nc_ht=scontent.fhan2-3.fna&oh=c02bbd46a6a4d63725c99f7346bb94a0&oe=5CC0A040"
  },
  {
    title: "13.07.2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/37005719_481561632296657_7673850945737850880_n.jpg?_nc_cat=109&_nc_oc=AQltIpwNJTtd_7njojO2dMp388ygCOZCEC1PFkFB3aMcYC1U7afd0NYjAGS_O_ft5gs&_nc_ht=scontent.fhan2-3.fna&oh=fc456c06efe6d7114195d17dc626940c&oe=5CF32532"
  },
  {
    title: "30.06.2018",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/36434178_470379750081512_1203783959025025024_o.jpg?_nc_cat=111&_nc_oc=AQnmmfD7IL7csMkIsWQgRh41I--XUQfwog-JzhaO-s291S_X9QMdE9DuGn_GYxOHDns&_nc_ht=scontent.fhan2-2.fna&oh=b03e994400d133963d58164e29ca8975&oe=5CF749EF"
  },
  {
    title: "28.06.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/36307364_468343753618445_5838912763652472832_o.jpg?_nc_cat=103&_nc_oc=AQkWBbu40njMqYoiS2YQ1KtwI63zg90keasFA8x7HFC4WlQxSH-H0dBilqOZmX_OZsE&_nc_ht=scontent.fhan2-1.fna&oh=4c5b9e9fdca90b7287954255be4a6bb7&oe=5D01042C"
  },
  {
    title: "26.06.2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/36137564_466467140472773_7276822962009800704_o.jpg?_nc_cat=109&_nc_oc=AQlxSVzUdcQ7fhSvKJu1-mEYcAW5Jm0jqKG8RSMcBE8URR4GU4MUsl1OnuhwbXLCKYw&_nc_ht=scontent.fhan2-3.fna&oh=ff3e2c106779db46f21c6a36cc56b1e8&oe=5CB6116F"
  },
  {
    title: "18.06.2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/35662115_459166614536159_3686812588449988608_o.jpg?_nc_cat=108&_nc_oc=AQl8NO3ebY2CAukuqFnGeW-Q6hTcIIe0ikKaJavCT1kxpNBx4YA4eSEjtQ-5GBMXYcw&_nc_ht=scontent.fhan2-3.fna&oh=c87a399b91045d0f17e3e040f56e05d9&oe=5CB2AC1D"
  },
  {
    title: "06.06.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/34585548_452089471910540_2045642242470707200_o.jpg?_nc_cat=102&_nc_oc=AQmjhbJGT_8s3zBqvBhvo66h1z0_dZtXZ2tfH8vC5GG09r_LihJ24zioh7Id46R2VAs&_nc_ht=scontent.fhan2-1.fna&oh=08a066b93173290e2c25d30c3c4b49ae&oe=5CEFA87A"
  },
  {
    title: "01.06.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/33774391_449934925459328_8785785190891913216_o.jpg?_nc_cat=104&_nc_oc=AQnZinddoTpmLMnHJmGDZHLMcBVOJ8WvE9Y8qIv28FBobMwYSNm1aCCNT7b-fPdWBmw&_nc_ht=scontent.fhan2-4.fna&oh=7c4498fa04310b3b7d35c9e912c3d037&oe=5CC22F17"
  },
  {
    title: "27.05.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/33665591_447934242326063_8442338165427011584_o.jpg?_nc_cat=110&_nc_oc=AQnPm9pSujFi0p00YzStMq-r3g9Ok1xkrW8ANkJ8Rn2HSoGclthriXY48_43FE6m48c&_nc_ht=scontent.fhan2-4.fna&oh=3638aaf5136015da35308e056b4cc7e0&oe=5CEEB5C1"
  },
  {
    title: "21.05.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/33159160_445173745935446_1791554056003518464_o.jpg?_nc_cat=106&_nc_oc=AQmkMi8Dfk13ZfdkDniObcSm764HUd5puYMQkPySH13rozV9eAvTmkX9OtdKma3F-NQ&_nc_ht=scontent.fhan2-1.fna&oh=aa9434f8b59d3e42a7f8ebbf56ce34d7&oe=5CFACA7C"
  },
  {
    title: "11.05.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/32202988_441264142993073_347720260226383872_o.jpg?_nc_cat=110&_nc_oc=AQmY_DHu9zUSHQ14_2HdmOFrkLgjQ3mmlq0yj5CqG9v0DqSbDSKC3dUj5JK9NkK9GrU&_nc_ht=scontent.fhan2-4.fna&oh=60a8e2e33a2b8da882c14a47aaf34b29&oe=5CEE7054"
  },
  {
    title: "10.05.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/32235582_440869423032545_6843039219393232896_o.jpg?_nc_cat=101&_nc_oc=AQlp-7yn6dYRmbnGbE-lvxwIQ7oWJ1nUOuyKG6-1TivW4DhGhx0r7rFwwUSlITNlDro&_nc_ht=scontent.fhan2-1.fna&oh=6ac8688ce3480ebb039073241d5388df&oe=5CBEA1C9"
  },
  {
    title: "07.05.2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/32086781_439670086485812_2258313681345445888_o.jpg?_nc_cat=100&_nc_oc=AQmwN95AlCalErTFIqswzVTmwQYrdF8jjnhNu3U5VNRQhhIonBdAAFOde-BwZ5kVeaI&_nc_ht=scontent.fhan2-4.fna&oh=0aa30b3b9684c6135029032cc09e53d3&oe=5CF107C3"
  },
  {
    title: "27.04.2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/31396425_435247596928061_2679309635579543552_o.jpg?_nc_cat=103&_nc_oc=AQnAcEtBQTx86-Zd-FRPqF3jWWW0mheBysMhTxKAYnpt-KH_3e-KZyKYWHw3kKKjzyQ&_nc_ht=scontent.fhan2-1.fna&oh=b4785ac9f5eac9fe3686028e8900a970&oe=5CF9FE65"
  },
  {
    title: "03.04.2018",
    url:
      "https://scontent.fhan3-3.fna.fbcdn.net/v/t31.0-8/29872827_425562311229923_7973528373470392901_o.jpg?_nc_cat=106&_nc_oc=AQm3cORAqhRyFoWAFk1zIsoZuP8s2KeIlRe-JsTiU4M6yQaCrbqSU2tsTiigBXMIW0c&_nc_ht=scontent.fhan3-3.fna&oh=4789db85adb4da02a16a60ffa034acf3&oe=5CFE22E2"
  },
  {
    title: "23.03.2018",
    url:
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t31.0-8/28827742_420936668359154_7175424194913692704_o.jpg?_nc_cat=108&_nc_oc=AQnCHt9k8IL7wwZ7pjNv1r3kdWEhHlHvWbSYSyDLMbU38vPV_b5OZI3gUl9HYBn5LHY&_nc_ht=scontent.fhan4-1.fna&oh=b749ed3f55ed02af3a4b0b2fad0f5b1d&oe=5CF3BE7C"
  },
  {
    title: "19.03.2018",
    url:
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/29340528_419332431852911_3233063381120319488_o.jpg?_nc_cat=105&_nc_oc=AQnIEGyOGkHxnCcP_248wMzDE8hoKcZUajA7Ba1xoGdpvk57bxA3urZXX7Ny4Byano8&_nc_ht=scontent.fhan4-1.fna&oh=7fe11d395c2c70cbbdb39778fce7960a&oe=5CF83ADA"
  },
  {
    title: "19.03.2018",
    url:
      "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/29388596_419332408519580_4528269743425060864_o.jpg?_nc_cat=107&_nc_oc=AQmyGShP0FBE0eM4Kn1W0AoTLaxcraD4OPw17OC3Drci1PV-brXxYp-_ZpxdZ_wJi7E&_nc_ht=scontent.fhan3-2.fna&oh=7166c31d5309ddcba1fa88e7a9dedb73&oe=5CB38B33"
  },
  {
    title: "25.01.2018",
    url:
      "https://scontent.fhan3-1.fna.fbcdn.net/v/t31.0-8/27355811_395819594204195_4371113752544738147_o.jpg?_nc_cat=109&_nc_oc=AQnVEpsj3KK8HMmqB3H5NvxIWXiOsubh07HrgO7-RTG0ZZwxBzFqanyfRxkuZd_Fpi8&_nc_ht=scontent.fhan3-1.fna&oh=219347fa69e38780fae05167c381bdde&oe=5CB62A01"
  },
  {
    title: "27.12.2017",
    url:
      "https://scontent.fhan3-1.fna.fbcdn.net/v/t31.0-8/26170844_384046522048169_304929907048065318_o.jpg?_nc_cat=110&_nc_oc=AQljZpQZ_NfbWZG2ef_tTsiDYawCKrSqOYiI6GZ9aCOyqgwHIXKkdf-P2QmpavBF45c&_nc_ht=scontent.fhan3-1.fna&oh=7797e0cce488c64082d7ff2bb2583794&oe=5CC210DD"
  },
  {
    title: "10.12.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-8/25182201_377230996063055_8775404196414389988_o.jpg?_nc_cat=107&_nc_oc=AQl86zCDXNdtvGtp7ydT16yf1-tUg-NFvLj_GfLL6jN3oEH083qVl5_wmVE1WM4zkNA&_nc_ht=scontent.fhan2-3.fna&oh=49c7930a3c2a9f39f05fc68d1ebff009&oe=5CC0826E"
  },
  {
    title: "09.12.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t31.0-8/24883461_376950516091103_1880325925795531974_o.jpg?_nc_cat=109&_nc_oc=AQkE3PG6-8Tc8gw5rYgs15CaMtIwZf84e94N7GpVg1HTnxZYt1rTAArdq2AlvSFKLAs&_nc_ht=scontent.fhan2-3.fna&oh=faa0223a7370484d56c2328c23c7071e&oe=5CBCE20C"
  },
  {
    title: "05.12.2017",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t31.0-8/24831271_375220149597473_8791038966788971180_o.jpg?_nc_cat=106&_nc_oc=AQkXOp_RdWdHPQbF1fXt9MtxN60uWrSqtowDKAE933ufoZ8LdHxG1DO6V4T4kgTilZM&_nc_ht=scontent.fhan2-1.fna&oh=61e2515c35feeb6c0ec931a7cc92d69c&oe=5CEF7787"
  },
  {
    title: "05.12.2017",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t31.0-8/24302153_375220132930808_6621311803709115871_o.jpg?_nc_cat=104&_nc_oc=AQkyRqOEIRdQaR3MI8n-AhwxzbPtH56RsxwpBQlEepEaMLyCb23NbwREyk6xTTqQ_i4&_nc_ht=scontent.fhan2-4.fna&oh=3365bd58c242771ede66f4ed4850c2c0&oe=5CEC82E3"
  },
  {
    title: "07.11.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/23244505_364769847309170_4881835153364661806_n.jpg?_nc_cat=108&_nc_oc=AQmXEzFgqMWnPx6jWhI1pI7QvyMT6rNIoBd1D88dLNDSrVDeFcYQ_96pckUvWET9aKw&_nc_ht=scontent.fhan2-3.fna&oh=3e498768a172d5e617e7c4eb8d107002&oe=5D01110C"
  },
  {
    title: "18.10.2017",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/22519114_357283671391121_7153207759268232352_n.jpg?_nc_cat=105&_nc_oc=AQkCZs2ge9NCNWhcGO1Er3Wq57A7k4YZk6apRZHlknVj2V5pk24ocwrDFKui_5ktTkQ&_nc_ht=scontent.fhan2-4.fna&oh=be5bc61e55c6252f14188d474ca5a9c6&oe=5CF85D37"
  },
  {
    title: "28.09.2017",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/22007468_350029705449851_1924158783734008482_n.jpg?_nc_cat=103&_nc_oc=AQngxl6JxP7hqqy6ssEwq-3nBl0sJaKYQZY_bOEv-kzqZ66HYfwXFYaUTKvKESF-MOo&_nc_ht=scontent.fhan2-1.fna&oh=4583e5ae73efabea4cfe996ca4d3e953&oe=5CBAD045"
  },
  {
    title: "20.09.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/21618053_347250095727812_4092378060228832062_n.jpg?_nc_cat=108&_nc_oc=AQnv8PhVUDFJQdOj-ISkqLw6e6vdmxcpXH0XuBpL8DojfZnIAkmozDygLOh8ZkJIcIw&_nc_ht=scontent.fhan2-3.fna&oh=6ec049d2a60f2ff92b6aa22d077e5a62&oe=5CB64D6E"
  },
  {
    title: "06.08.2017",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/20621108_330639840722171_9158412466232589991_n.jpg?_nc_cat=100&_nc_oc=AQkePwzDoeR1AFZqBIB8swkns5xjrVhAqXPWG879fxiwNmlMy8tmE2gSCZfgjPdPPQQ&_nc_ht=scontent.fhan2-4.fna&oh=5df54fffb004c03a0f41bdd05a5df5aa&oe=5CB3ADB8"
  },
  {
    title: "27.07.2017",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/20294012_327004254419063_1587899714023432134_n.jpg?_nc_cat=101&_nc_oc=AQlKOaQEEZeX8CSd_6tAg6XwvvT0yr1sC7lvN2REBcAhkxlHf3bebpr0S4om1eXeTi8&_nc_ht=scontent.fhan2-1.fna&oh=dbe47d290584e2afa1b59dc17f368de0&oe=5CF5FA12"
  },
  {
    title: "18.03.2017",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/17265018_264464817339674_4678105770072473357_n.jpg?_nc_cat=103&_nc_oc=AQlrm0LUMzg5-jzoSimRkiHaGQYafrHh9h9FL507o5Zrz03O2nSouiGlMXSlQ5Nk4jo&_nc_ht=scontent.fhan2-1.fna&oh=997f170f49a175d6ca59ad1cd0bc6b47&oe=5CFEBE1E"
  },
  {
    title: "21.02.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/16830742_252658631853626_1801107928528153172_n.jpg?_nc_cat=109&_nc_oc=AQngzqMSvlCXt5ErjhoxT0GxO91NOs_PoCVwI-bFtfMqyzjZ5FWQ-37vApnHOvKqDKY&_nc_ht=scontent.fhan2-3.fna&oh=e06da758d4cbb6f6c15d4d34bd016cef&oe=5CED947C"
  },
  {
    title: "19.01.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/16174404_235246180261538_6987026446187018298_n.jpg?_nc_cat=109&_nc_oc=AQkLyDfYcpAgJ4yH1aPuhh2OxmywdaL0S2yusK70RPzgfA_bVR2qrpj6WtWb0OUpWgo&_nc_ht=scontent.fhan2-3.fna&oh=57f2e30793aea274771226b3da848cce&oe=5CF546AF"
  },
  {
    title: "17.01.2017",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/15978008_234195707033252_73774459976906175_n.jpg?_nc_cat=104&_nc_oc=AQlJCqccN3VIlSRsL3B_gHeL61Tn1Ar707tAqWPOUAsBcuCmqTvUEsWj86ItR9DTX1M&_nc_ht=scontent.fhan2-4.fna&oh=e4d04210b143d82fa9502bfa188b8f10&oe=5CFD9260"
  },
  {
    title: "04.01.2017",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/15822663_227120057740817_77896561457718781_n.jpg?_nc_cat=107&_nc_oc=AQlVLBe0VcDijqy-2HDyrgm6EF9O3IFFsu5ErAUrULAadsEd5fS5s6ROE2coMe0lECI&_nc_ht=scontent.fhan2-3.fna&oh=d1d816ae2561c68090733a5d8be1309d&oe=5CFFAE8C"
  },
  {
    title: "01.01.2017",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/15822944_225235427929280_8509036151794289459_n.jpg?_nc_cat=111&_nc_oc=AQl8651Xh51TwRn-QOEEsCYVY6IrscLTQHZx93ViyHnIONMomY7fbVbW6Rwg2PJU5Ho&_nc_ht=scontent.fhan2-2.fna&oh=7d968e441c52c506aa7e9111cc7be171&oe=5CB91D6D"
  },
  {
    title: "12.11.2016",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/15056324_196925364093620_7455510541519188415_n.jpg?_nc_cat=111&_nc_oc=AQmFyo4ZP57Y2J2QNFKuO0gH4J5-w3WQWRH1hSQ6BOmlLkn6J5D1iCOyAKOAkJsR4v8&_nc_ht=scontent.fhan2-2.fna&oh=4728ec14e6c0d4bd4f120d4856cbf8ea&oe=5CF62631"
  },
  {
    title: "04.11.2016",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/14915206_191039734682183_6813565439450966037_n.jpg?_nc_cat=105&_nc_oc=AQl_6vZ-p8DKEtHlGMR54GPlQOk5G4vt2RvtHn8GCuQeUebw5h5HCyvH6gcnU8FJsqM&_nc_ht=scontent.fhan2-4.fna&oh=740697b02d39e03a1f1fccdd6654189e&oe=5CC44AB3"
  },
  {
    title: "26.10.2016",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/14606421_182929288826561_5378163555805385979_n.jpg?_nc_cat=102&_nc_oc=AQm1_5u3SBJakEu_JCJpf3P8s72VpEOUe8QOihRi2UILdO5pa-djERcOZxWQ2MT8dCg&_nc_ht=scontent.fhan2-1.fna&oh=0283a285b41190d7fccbda2454d89bc1&oe=5CED0F7B"
  },
  {
    title: "05.10.2016",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/14572219_165919717194185_7064527502360266048_n.jpg?_nc_cat=106&_nc_oc=AQkYdAWueRF_HIsO9pNIVONhOfHmYNtUeZcwERm69RQ4kXE-m-6Tq4yTCUdP1_N2_mo&_nc_ht=scontent.fhan2-1.fna&oh=03f77556278a321b6d8685075f765f81&oe=5D00B681"
  },
  {
    title: "30.09.2016",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/14519665_160877401031750_8706599062621391936_n.jpg?_nc_cat=104&_nc_oc=AQkPpdlSGb_lYxesmrbkY__k-nFsbixQdMkAKD-aVp3TNj1M3vuDyZuEVIam9F968v4&_nc_ht=scontent.fhan2-4.fna&oh=cce76ad15aea8c4975db6db06ac5934b&oe=5D00B81E"
  },
  {
    title: "29.09.2016",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/14440871_160782911041199_7229644009917539486_n.jpg?_nc_cat=103&_nc_oc=AQmRdI7HM8dG_4rMCXq4ahsUgD9MfH2qAVtGaWUUjmBhSDFf7UQxppdFI0Y9ERFz280&_nc_ht=scontent.fhan2-1.fna&oh=af77905895851ba456542fdab8e47b3e&oe=5CC1FA00"
  }
];

const product2 = [
  {
    title: "30/01/2019",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/50863675_1259940907489251_8697901037505216512_o.jpg?_nc_cat=105&_nc_oc=AQmzs1y51vwOevg5KulSQUbQtkOfdLkXgJZcQkpctTxNgTmvFUIyp5iZZtkDmJEoa5c&_nc_ht=scontent.fhan2-4.fna&oh=ce3b8f2365c90197ef689407585a6ac2&oe=5CF2CD3C"
  },
  {
    title: "29/01/2019",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/50927183_1259314350885240_8683624656407625728_o.jpg?_nc_cat=110&_nc_oc=AQk-t5GbWz7KhZ4FRdMOaxgNabHgDSpF-TqLHZOwekX0vdGxf416HSNVFlySs6veZq0&_nc_ht=scontent.fhan2-4.fna&oh=b81208c16423e5e6eff849abac92bb0b&oe=5CF5CA5E"
  },
  {
    title: "28/01/2019",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/51161339_1258675484282460_5927566506459136000_o.jpg?_nc_cat=110&_nc_oc=AQmu4J0Uq1iHwYdsc6w4paIMfsrFUKEszTqGhN6KehmICDOhegwXGGMggVVyrKP1lTg&_nc_ht=scontent.fhan2-4.fna&oh=81f991e8f29058b72706d7677ec88752&oe=5CC1DB1B"
  },
  {
    title: "27/01/2019",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/50695613_1258241114325897_4449205657568018432_o.jpg?_nc_cat=101&_nc_oc=AQmjMtjLaNQWvNK5K9Cz_2hU3bzPf4E--TdtFwB470at9lZaZ7qPf9Fw70xcgBlU8J8&_nc_ht=scontent.fhan2-1.fna&oh=70a50659547a69038a528a009e2275db&oe=5CBD5A40"
  },
  {
    title: "23/01/2019",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/50641885_1255099894640019_5090190102991208448_o.jpg?_nc_cat=101&_nc_oc=AQnbtOMbSaNzV5rBQy5g4_mGl60Zy9IrnbQiA41u2kBaGC41bnoKVX6Tg7gWSBJkhLM&_nc_ht=scontent.fhan2-1.fna&oh=ddb84dd982f493b584f3ed1b001b9df4&oe=5CECBB98"
  },
  {
    title: "10/01/2019",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/49723843_1246315135518495_324034254323318784_o.jpg?_nc_cat=105&_nc_oc=AQmjHXgOtz2XTTJ9QJKvSGuImYoc6qqNHNl908DOe-5mSd_-eTa7XC2MniC6HyACBa0&_nc_ht=scontent.fhan2-4.fna&oh=0a9726e8b3acf72896121aeddb6a5e2d&oe=5CFA58EA"
  },
  {
    title: "09/01/2019",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/49708662_1245681835581825_9030496196736581632_o.jpg?_nc_cat=108&_nc_oc=AQm7jtcjE15jXuR3onHj0mFF_4SA2YKZ98HJDxIFCwdZIGOTWWdtF4xTTinkkSg7BcY&_nc_ht=scontent.fhan2-3.fna&oh=9485c3169c3d8bab6ffc9a19a4871e48&oe=5D016AA5"
  },
  {
    title: "08/01/2019",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/49605340_1244951088988233_4345839796346683392_o.jpg?_nc_cat=111&_nc_oc=AQl29MDk-1M1bM11uPVxy14dYtST1tAOB55gCxypm1C-j9zp5CeO4cZ3Ub5B4gZUqqs&_nc_ht=scontent.fhan2-2.fna&oh=e8426ccb18adf68f213048b8aec30828&oe=5CEC88B8"
  },
  {
    title: "25/12/2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/49106181_1234635430019799_1444121902183350272_o.jpg?_nc_cat=108&_nc_oc=AQkGn1KXGIPsXSb6FaxKw7Sv6Q7Htu_VhWg4E8K7Hn1soCpCYvAXYKpLm-akdQplAAw&_nc_ht=scontent.fhan2-3.fna&oh=59e36040fdc169b4f37fba330a3f7fc6&oe=5D014966"
  },
  {
    title: "24/12/2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/48891245_1233996816750327_7852589737792503808_o.jpg?_nc_cat=104&_nc_oc=AQmGPUpITIha1PEOWBxa-fVwTLj8siR1bPCifaFbohoGPICNhTQq_CD1V2vGTpvaCkU&_nc_ht=scontent.fhan2-4.fna&oh=d3ee99883802df1fa2cbf2caffdc832d&oe=5CFA95A4"
  },
  {
    title: "21/12/2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/48393734_1232231556926853_1973272984130945024_o.jpg?_nc_cat=108&_nc_oc=AQm62KQA8TBMfkr4AD5QRZnwUQ1K7luGMWhPpzMBL6-IrYY1_I0iW98hBWh0Z8FjvtI&_nc_ht=scontent.fhan2-3.fna&oh=257ba2792432d7c6804d36dcc1fe63b5&oe=5CED0046"
  },
  {
    title: "17/12/2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/48385865_1229288090554533_2505641211331608576_o.jpg?_nc_cat=104&_nc_oc=AQmmjt68GMqJfVAGgCkcv_4udATvOWK8xIv2RpBVTDzSm6rsmljIv-iYgBFM2V76gtE&_nc_ht=scontent.fhan2-4.fna&oh=ec96c980df5fef44f781fc065bb873b5&oe=5CF124F5"
  },
  {
    title: "07/12/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/47489348_1221992594617416_2096362348787793920_o.jpg?_nc_cat=102&_nc_oc=AQmj9GK3s560jK-jlbTz4R-4Eo5ST0VSozu9-Nl4cxFeojYIcfHrZC-k37vzUEr5M2A&_nc_ht=scontent.fhan2-1.fna&oh=ded325bbe9f657f95100d8e1583924fd&oe=5CB31AE5"
  },
  {
    title: "07/12/2018",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/47448902_1221990841284258_1481729396036337664_o.jpg?_nc_cat=111&_nc_oc=AQnrZER2zYjkBcO8KHSQRgVjifMLHPAtvlE1oSjhBHELfjUl8VGGGDDBGAqI7QwKAAY&_nc_ht=scontent.fhan2-2.fna&oh=cd9d33d4e8dbbe8bf573625e7491102a&oe=5CF408C0"
  },
  {
    title: "07/12/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/47578355_1221990801284262_8035387840877559808_o.jpg?_nc_cat=103&_nc_oc=AQmPpQhuoNJMnf7SO1TmGx8QgCfxTrF4kfTcG3C28o3VKDAt58ZRimzC_L9wqQWxeo0&_nc_ht=scontent.fhan2-1.fna&oh=57e3765f0bf59c9ad419e9104baf6a6f&oe=5CC416F3"
  },
  {
    title: "07/12/2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/47571850_1221990781284264_5458255421435281408_o.jpg?_nc_cat=104&_nc_oc=AQm4Amj__52seQiDyeSulefPKh-_wNouGE8YpiSlKj1vxgDpH3IykLH6mYrcMXMg2ss&_nc_ht=scontent.fhan2-4.fna&oh=8483a53a7c70fff8a960976af6361edf&oe=5CB52FDB"
  },
  {
    title: "05/12/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/47375658_1220663474750328_2673229216018857984_o.jpg?_nc_cat=102&_nc_oc=AQnNRUYNpHZdt-A01C5wdM-KO3C6vai1CfpScEtvEJNMqnSOQde553J5iyPhmFPEvFM&_nc_ht=scontent.fhan2-1.fna&oh=1502991ac8ae8e6728a1002c532b0620&oe=5CC34734"
  },
  {
    title: "29/11/2018",
    url:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/47154224_1216156521867690_2201114479423389696_o.jpg?_nc_cat=111&_nc_oc=AQmm79AZtvjmB6ZyAg2zmypi9PkpudhLJZIlpqFdBnvoB7wcFswbuO62Zb3HscUtqvs&_nc_ht=scontent.fhan2-2.fna&oh=5bd2fbf657b42fdc36ab60df3325241e&oe=5CF95679"
  },
  {
    title: "21/11/2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/46501625_1210694622413880_6567613759953567744_n.jpg?_nc_cat=110&_nc_oc=AQlVwsFVRUAKYPsdC4YoNLQrU6zBapdbMQsQoDVfXwhL-RodGN5sswZHhHw64uaoia0&_nc_ht=scontent.fhan2-4.fna&oh=a3c2d6187b48aee9cef697265aedaa12&oe=5CFACD54"
  },
  {
    title: "21/11/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/46482456_1210694635747212_6629184688827138048_o.jpg?_nc_cat=106&_nc_oc=AQm23ZwA8X7MwIDNCPIw6p2w8DfNfZhYGcF4IibbOpq_0pkgt8II3VMno63yszq9wCo&_nc_ht=scontent.fhan2-1.fna&oh=4acca8aa0e7978f87cb823fe57817ff6&oe=5CF6CA6A"
  },
  {
    title: "20/10/2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/44460844_1190139487802727_2670596985181962240_o.jpg?_nc_cat=107&_nc_oc=AQn1_Busx9mcjdKQk7o0ueefYrYZOv-ItDQmB6zu-WUY4o1Rk4lhK28K6vMbBN9x1oQ&_nc_ht=scontent.fhan2-3.fna&oh=e8c3ec13611600524b31865537d66dc5&oe=5CF414B2"
  },
  {
    title: "17/10/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/44165057_1188080748008601_7047830368237387776_o.jpg?_nc_cat=102&_nc_oc=AQlQsl8iFfMip25eHqGLxgChwAJUQPUicR97vWO30VTdx6mLKjOpxP4vph29HAtHnA0&_nc_ht=scontent.fhan2-1.fna&oh=e8d436286e6e5bcf0ace77370e141f16&oe=5CF85753"
  },
  {
    title: "26/09/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/42586818_1172995559517120_3189319607361994752_o.jpg?_nc_cat=106&_nc_oc=AQmEcr_ecwakqw-ISaMai7GkeY5TQUoygI1moGRw7oRqn_77IV0SFv2Kp5cCsNG-YAQ&_nc_ht=scontent.fhan2-1.fna&oh=05e44eb639ce43116a447e45ae431778&oe=5CFE77E6"
  },
  {
    title: "24/09/2018",
    url:
      "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/42369929_1171928876290455_991921949686890496_o.jpg?_nc_cat=109&_nc_oc=AQkmwTZ4G2tnZ1gXHS8pPG51N1dU_6ADd7VOW-2r--cTko4rVkI1g0gRoco_Le0K1IQ&_nc_ht=scontent.fhan2-3.fna&oh=d0d97337bf1fda90e4571ffd135eb2dd&oe=5CBCA010"
  },
  {
    title: "18/09/2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/41671495_1165353926947950_789294635431231488_o.jpg?_nc_cat=105&_nc_oc=AQmU2bzV1M6lNRkjdrTpAhPdqWm9EvYG2ACCr85_fFqlo3hK2QnI3QNLkZv-nPUdUNE&_nc_ht=scontent.fhan2-4.fna&oh=4c07a1197a9344cc2deb799e431e9417&oe=5CC32E6C"
  },
  {
    title: "11/09/2018",
    url:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/41452172_1164118557071487_7101137612529729536_o.jpg?_nc_cat=105&_nc_oc=AQnKtKGEu8npBDP63FsDRAUQG9_HL0PkdwwGfcsnUarZldMpmR4sKYEklanQBtpOghk&_nc_ht=scontent.fhan2-4.fna&oh=2338af2a32a0a1b9955c8945e08794e1&oe=5CFF0EEA"
  },
  {
    title: "11/09/2018",
    url:
      "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/41550909_1164118537071489_6315582003827703808_o.jpg?_nc_cat=102&_nc_oc=AQlO6WjJzDdZpCOKfmbz16bfl2YcElGay5nEpghWMWA1SiooXqwRArH7rvfAlNNuJfc&_nc_ht=scontent.fhan2-1.fna&oh=221762170c47429b5663bf088601bd87&oe=5CBD4CE7"
  }
];

class ProductSlider extends React.PureComponent {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    const { changeLayout } = this.props;
    const product = changeLayout ? product2 : product1;
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Slider {...settings}>
          {product.map(item => (
            <div key={item.url}>
              <img
                src={item.url}
                alt={""}
                style={{
                  width: "95%",
                  height: "30vh",
                  margin: "auto",
                  objectFit: "cover"
                }}
              />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  letterSpacing: "2px",
                  fontSize: "16px"
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
