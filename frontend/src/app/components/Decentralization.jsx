import React from 'react'
import Roadmap from './Roadmap'
import Blocks from './ui/Blocks'
import BlockEndSection from './ui/BlockEndSection'

function Decentralization() {
  return (
    <div className='p-10 md:p-20 text-white primary_bg_color  border-b border-2-gray-500 '>
<h1 className='heading capatilize'>
    The power of 
</h1>
<h1 className='text-[8vw] font-extrabold unbordered'>
    DECENTRALIZATION
</h1>
<p className='mt-10 md:mt-20 para'>
ASS I AM is redefining the future of adult entertainment with cutting-edge blockchain technology, offering a fully decentralized platform. Your content, interactions, and experiences are securely stored across a network of decentralized nodes, ensuring unmatched transparency, security, and performance
</p>
<p className='mt-10 md:mt-20 para'>
Say goodbye to centralized control and embrace a network where you can actively contribute to the platform’s strength and evolution. At the heart of ASS I AM lies decentralization  eliminating risks tied to centralized servers, such as data breaches, single points of failure, and content manipulation
</p>
<p className='mt-10 md:mt-20 para'>
By distributing control across a robust and interconnected network, we create a fair, secure, and censorship-resistant environment for everyone – creators, viewers, and contributors alike
</p>
<div className='flex items-center justify-center'>
<h1 className='heading text-white mt-10 md:mt-24'>
The Foundation of Decentralization
</h1>
</div>
<Roadmap/>
<Blocks/>
<BlockEndSection/>
    </div>
  )
}

export default Decentralization