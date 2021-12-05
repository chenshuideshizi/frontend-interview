import './style/reset.css'
import './style/common.css'
import './style/box.scss'
// import 'element-ui/lib/theme-chalk/index.css'
// import "element-ui/packages/theme-chalk/src/index.scss"

import { cube } from './utils/math'

function component() {
    const element = document.createElement('pre')
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return element
}

document.body.appendChild(component())
