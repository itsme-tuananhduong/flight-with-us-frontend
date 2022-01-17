import Ticket from './Ticket';

import './TicketBox.css';

const TicketBox = ({ ticketList, choosenTicketInfo, setChoosenTicketInfo }) => {
  return (
    <div className="ticket-box-wrapper">
      {ticketList.map((ticket) => (
        <Ticket
          key={ticket.IdVeMayBay}
          IdVeMayBay={ticket.IdVeMayBay}
          LoaiVe={ticket.LoaiVe}
          GiaVe={ticket.GiaVe}
          HangHK={ticket.HangHK}
          SHMayBay={ticket.SHMayBay}
          ThoiGianKhoiHanh={ticket.ThoiGianKhoiHanh}
          ThoiGianHaCanh={ticket.ThoiGianHaCanh}
          DiaDiemKhoiHanh={ticket.DiaDiemKhoiHanh}
          DiaDiemHaCanh={ticket.DiaDiemHaCanh}
          LoaiHinhBay={ticket.LoaiHinhBay}
          passengers={ticket.passengers}
          Thue={ticket.Thue}
          SLVeConLai={ticket.SLVeConLai}
          IdChuyenBay={ticket.IdChuyenBay}
          choosenTicketInfo={choosenTicketInfo}
          setChoosenTicketInfo={setChoosenTicketInfo}
        />
      ))}
    </div>
  );
};

export default TicketBox;
