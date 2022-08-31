import React from 'react'
import './Review.css'
import img1 from './Pic/image 222.png'
import img2 from './Pic/image 223.png'
import img3 from './Pic/image 224.png'
import img4 from "./Pic/image 227.png"

function Review() {
    return (
        <div>
            <div className="container">
                <span><h1>Reviews</h1></span>
                <div className="cards">
                    <div className="card">
                        <div className="pic">
                            <img src={img1} alt="" />
                        </div>
                        <div className="txt">
                            It's not warm enough and looks quite ashy on warm or olive skin. Same colour depth but warmer/ more olive shades like 215 would better suit many Indian skintones. Also, it's too Matte and accentuates pores. Wish maybelline had the smooth and dewy version in India as it is a much better texture. And can be easily mattified with a powder on top if needed.
                        </div>
                    </div>

                    <div className="card">
                        <div className="pic">
                            <img src={img4} alt="" />
                        </div>
                        <div className="txt">
                            Not really happy with this foundation, first of all its bottle has lots of scraches as if it is a used one, secondly, it's a made in china product. Sticker says peel for ingredients, but no ingredients are written on it. So no authenticity of ingredients.... <br />
                            It's non returnable product...I wasted money as I am not confident whether to use this foundation on face or not.
                            Sudggesting better buy lakme product or shop
                            from some store.
                        </div>
                    </div>

                    <div className="card">
                        <div className="pic">
                            <img src={img2} alt="" />
                        </div>
                        <div className="txt">
                            The product is beyond my expectations. At 1st I looked pale. But in a couple of minutes it blended subtly to my skin and I am sooo sooo sooo happy with the purchase. Just the package wasn't upto the mark because the cap was open. Thankfully the product didn't pour out, otherwise I would have been sad. Regarding the product, it is best. Loving it! Thank you!
                        </div>
                    </div>

                    <div className="card">
                        <div className="pic">
                            <img src={img3} alt="" />
                        </div>
                        <div className="txt">
                            Easy to apply for beginners. I apply it with Beauty blender. It's my first foundation. Maybelline fit me range is so vast that you can easily get one matching your skin tone. This one is for dusky skin tones (NC 44 in MAC maybe). There's no smell as such which makes me believe there are no harmful chemicals. Quantity is okay. It has a dispenser so it's very convenient to apply and suitable for travelling. It has a shelf life of 3 yrs and I got a recently manufactured product. Consistency isn't thick making it suitable for summers. At the same time coverage is good. Only negative part is that it oxidises if worn for a long time and if you're not in AC. I match it with 40 Caramel concealer from fit me, mainly to hide blemishes. For highlighting or brightening purpose 30 Honey from fit me concealer range will work for this foundation shade.
                            One person found this helpful
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review