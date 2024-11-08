import React from 'react'
import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <>
            <nav className='flex font-semibold text-white items-center justify-center flex-wrap p-2  bg-slate-900   '>
                <div className="flex items-center flex-shrink-0 text-white mr-6 ">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="189.000000pt" height="90.000000pt" viewBox="0 0 189.000000 170.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M534 1321 c-83 -24 -143 -61 -197 -121 -85 -95 -117 -195 -117 -368
                          0 -72 6 -137 16 -176 45 -174 163 -290 336 -331 63 -15 222 -20 252 -9 13 5
                          16 23 16 91 l0 84 -37 -8 c-77 -15 -160 -7 -218 22 -60 29 -92 64 -127 141
                          -20 43 -23 65 -23 184 0 120 3 141 24 187 59 131 207 192 359 147 23 -7 23 -6
                          20 82 l-3 89 -120 2 c-90 1 -136 -3 -181 -16z"/>
                            <path d="M924 1325 c3 -9 6 -45 6 -80 l0 -63 168 -4 c180 -4 215 -13 247 -62
                          43 -65 22 -168 -43 -208 -34 -21 -51 -23 -204 -26 l-168 -4 0 -79 0 -79 114 0
                          114 0 115 -187 115 -188 116 -3 c64 -1 116 0 116 3 0 4 -58 97 -130 208 l-129
                          201 59 28 c94 45 149 127 158 233 11 137 -57 246 -183 296 -55 21 -79 23 -269
                          27 -192 3 -208 2 -202 -13z"/>
                            <path d="M626 1075 c-108 -38 -156 -118 -156 -261 0 -166 80 -261 230 -272 37
                      -2 84 -2 104 2 l36 7 0 55 c0 55 0 55 -22 40 -14 -10 -44 -16 -78 -16 -101 0
                      -149 52 -158 171 -6 82 20 148 70 179 40 24 116 27 158 5 l30 -16 0 54 c0 53
                      -1 55 -31 61 -52 10 -142 6 -183 -9z"/>
                        </g>
                    </svg>
                </div>
                <div >
                    <ul className='flex gap-x-4 p-5 justify-center  '>
                        <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '>
                            <Link to="/"> Home      </Link>
                        </li>
                        <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '>
                            <Link to="/about"> About     </Link>
                        </li>
                        <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '>
                            <Link to="/meet"> Meet   </Link>
                        </li>
                        <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '>
                            <Link to="/event" > Events    </Link>
                        </li>
                        <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '>
                            <Link to="/project"> Projects</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Nav
