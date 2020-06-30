import React, {useEffect, useCallback} from 'react'


const AdSpace = ({points}) => {
	const writeToNode = useCallback(node => {
		console.log('node is ', node)
		if (node != null) {
			node.innerHTML = ''

			const script1 = document.createElement('script')
			script1.async = true
			script1.innerHTML = `
			atOptions = {
				'key' : '17ddc837ad3af92457e8560421f8bd0c',
				'format' : 'iframe',
				'height' : 300,
				'width' : 160,
				'params' : {}
			};
			console.log(atOptions)
			`
			console.log('hey')
			node.appendChild(script1)
			const script2 = document.createElement('script')

			script2.src = 'http' + (window.location.protocol === 'https:' ? 's' : '') + '://www.topdisplaynetwork.com/17ddc837ad3af92457e8560421f8bd0c/invoke.js'
			script2.async = true
			node.appendChild(script2)
		}
	},[points])
	return (
		<div className='adSpaceContainer'>
			<div className='adSpace' ref={writeToNode}></div>
		</div>
	)
}

export default AdSpace