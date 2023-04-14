import '@styles';
import { getTicketById, getTours } from "./api";
import { initTicketInfo, initTitle, registerConfirmButton } from "./scripts";
import { ITour, IVipTicket, TicketType } from "./interfaces";

let ticketInstance: TicketType;

// инициализация страницы
initOrderPage();
registerConfirmButton();
function initOrderPage(): void
{
  initTitle('footer', 'h2', 'Tours around the world');
  const tourData: Promise<Array<ITour>> = getTours();
        tourData.then((data: Array<ITour>): void =>
  {
    const id = sessionStorage.getItem('id'),
          index = data.findIndex(data => data.id == id),
          ticketData: null | Promise<Array<IVipTicket>> = getTicketById(id);
    if (ticketData)
        ticketData.then((data): void => initTicketInfo(data[0]))
    else
      initTicketInfo(data[index]);
    initTitle('header', 'h3', data[index].name);
  });
}