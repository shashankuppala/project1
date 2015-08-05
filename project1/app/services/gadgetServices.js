/**
 * Created by shashank on 7/9/2015.
 */
app.service("gadgetService",[function(){
    var gadgets ={ "gadgets" : [
        {
            "item": "1",
            "name": "Apple iPod Touch 4th Generation 32GB with Bonus Accessory Kit",
            "salePrice": 189,
            "shortDescription": "The world's most popular portable gaming device is now even more fun. Listen to your favorite albums. essages over Wi-Fi with iMessage. Record HD video. Make FaceTime calls. iPod touch even works with iCloud, which stores your content and pushes it to all your devices.",
            "thumbnailImage": "http://i.walmartimages.com/i/p/11/13/00/02/31/1113000231755_100X100.jpg",
            "productUrl": "http://www.walmart.com/ip/Apple-iPod-Touch-8GB-32GB-and-64GB-newest-model/15076191",
        },
        {
            "item": "2",
            "name": "Apple iPod Touch 4th Generation 32GB with Bonus Accessory Kit",
            "salePrice": 189,
            "shortDescription": "The world's most popular portable gaming device is now even more fun. Listen to your favorite albums. essages over Wi-Fi with iMessage. Record HD video. Make FaceTime calls. iPod touch even works with iCloud, which stores your content and pushes it to all your devices.",
            "thumbnailImage": "http://i.walmartimages.com/i/p/11/13/00/02/31/1113000231755_100X100.jpg",
            "productUrl": "http://www.walmart.com/ip/Apple-iPod-Touch-8GB-32GB-and-64GB-newest-model/15076191",
        },
        {
            "item": "3",
            "name": "Apple iPod Touch 4th Generation 32GB with Bonus Accessory Kit",
            "salePrice": 189,
            "shortDescription": "The world's most popular portable gaming device is now even more fun. Listen to your favorite albums. essages over Wi-Fi with iMessage. Record HD video. Make FaceTime calls. iPod touch even works with iCloud, which stores your content and pushes it to all your devices.",
            "thumbnailImage": "http://i.walmartimages.com/i/p/11/13/00/02/31/1113000231755_100X100.jpg",
            "productUrl": "http://www.walmart.com/ip/Apple-iPod-Touch-8GB-32GB-and-64GB-newest-model/15076191",
        }

    ]
    };
    return{

        getGadgets: function(){
            return gadgets;
        },

        addGadget: function(gadget){
          gadgets.push(  gadget )

        }
    }


}]);