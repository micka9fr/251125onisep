import { useDispatch, useSelector } from "react-redux";
import Mf from "./MemeForm";
import type { appDispatch, RootState } from "../../store/store";
import { update } from "../../store/current";
const MemeForm = () => {
  const current = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  const d: appDispatch = useDispatch();
  return (
    <Mf
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        d(update(meme));
      }}
    />
  );
};

export default MemeForm;
