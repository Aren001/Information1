import React from 'react';
import s from './modal.module.css';
import r from './respmodal.module.css';


const Modal = (props) => {
    const { modalCont, modal, handleClose } = props;
    
    return (
        <div style={{display: modal ? "block" : "none"}} className={`${s.container} ${r.container}`}>
            <div className={`${s.conteners} ${r.conteners}`}>
                <div className={`${s.modalC} ${r.modalC}}`}>
                    <div >
                         < span className={s.buttons} onClick={() => handleClose()}>&times;</span>
                       <h2> {modalCont.name} </h2>
                    </div>
                    <div className={`${s.restImg} ${r.restImg}`}>
                        <img src={modalCont.srcImg} alt={modalCont.name} />
                    </div> 
                
                </div>
                <div className={`${s.line} ${r.line}`}></div>
                <div className={`${s.menuImgCont} ${r.menuImgCont}`}>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-crab-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/beer (7).png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/fast-food.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-food-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-steak-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-kawaii-cupcake-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-rack-of-lamb-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-watermelon-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    <div >
                       <span><img className={`${s.menuImg} ${r.menuImg}`} src={"../images/menu/icons8-french-press-100.png"} alt={modalCont.name} /></span> 
                       <span> -:- Hamex Xecgetin </span>
                    </div>
                    
                        {/* <button onClick={() => handleClose()}>closss</button> */}
                   
                </div>   
                    
            </div>
        </div>
    )
};

export default Modal;