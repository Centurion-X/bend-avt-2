import '@styles';
import { getTours } from "./api";
import { importAll, initTitle, initToursElements } from "./scripts";
import { ITour } from './interfaces';

// ссылка на изображения нужна, чтобы webpack формировал изображения (в dist)
const imagesStore = importAll(require.context('@assets/images/', false, /\.(png|jp?g|svg)$/));

// инициализация страницы
initIndexPage();
function initIndexPage(): void
{
    initTitle('header', 'h1', 'Tours');
    initTitle('footer', 'h2', 'Tours around the world');
    const tourData: Promise<Array<ITour>> = getTours();
          tourData.then((data: Array<ITour>): void => initToursElements(data));
}