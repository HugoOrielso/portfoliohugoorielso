import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

const NavBarDetails = () => {
    const navigate = useNavigate();
    const handleProjectClick = () => {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            flushSync(()=>{
                navigate(`/`);
            })
          });
        } else {
          navigate(`/`);
        }
      };
  return (
    <header className='flex sm:p-1 flex-col top-0 left-0 items-center z-50 bg-[#24242428] backdrop-blur-md justify-center w-full mb-4 fixed sm:dark:border-b'>
        <div className="w-full max-w-[800px] flex items-start">
          <button onClick={()=> handleProjectClick() } className=" bg-black text-white rounded p-3">Volver</button>
        </div>
    </header>
  )
}

export default NavBarDetails