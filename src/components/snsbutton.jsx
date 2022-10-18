
import { useState } from "react";


const SnsButton = () => {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className="sns-container">

            <div className="row">
                {isShown && (
                        <div className="container-fluid" >

                            <ul class="sns-menu">
                                <li class="sns-menu-item">
                                    <a href="https://www.linkedin.com/in/laurad-castanedad/">
                                        <i class="fa-brands fa-linkedin icon"></i>
                                    </a>
                                </li>    

                                <li class="sns-menu-item">
                                    <a href="https://github.com/U-4D89">
                                        <i class="fa-brands fa-square-github icon"></i>
                                    </a>
                                </li>   

                                <li class="sns-menu-item">
                                    <a href="https://www.hackerrank.com/ldcastaneda">
                                        <i class="fa-brands fa-hackerrank icon"></i>
                                        </a>
                                </li>   

                                <li class="sns-menu-item">
                                    <a href="/email">
                                        <i class="fa-solid fa-envelope icon"></i>
                                    </a>
                                </li>   
                            </ul>

                        </div>
                )}
                <button
                    onMouseEnter={()=> setIsShown(true)}
                    onClick={()=> setIsShown(false)}>
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>

        </div>
      
    )
}

export default SnsButton;