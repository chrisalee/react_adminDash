import './widget.scss';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Widget = ({ type }) => {

    let data;
    //temp data
    const amount = 100;
    const percentage = 20;

    switch(type) {
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See All Users",
                icon: (
                    <PersonTwoToneIcon 
                        className='icon' 
                        style={{
                            color: "#f3a1ad",
                            backgroundColor: "#e6929e5e"
                        }}
                    />
                )
            }
            break;

        case "order":
            data={  
                title: "ORDERS",
                isMoney: false,
                link: "View All Orders",
                icon: (
                    <ShoppingCartTwoToneIcon 
                        className='icon' 
                        style={{
                            color: "#76790e",
                            backgroundColor: "#fbff0047"
                        }}
                    />
                )
            }
            break;

        case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View Net Earnings",
                icon: (
                    <MonetizationOnOutlinedIcon 
                        className='icon' 
                        style={{
                            color: "#116d1a",
                            backgroundColor: "#92e6995e"
                        }}
                    />
                )
            }
            break;

        case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon 
                        className='icon' 
                        style={{
                            color: "#4314a9",
                            backgroundColor: "#9c92e65e"
                        }}
                    />
                )
            }
            break;

        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="widget__left">
            <span className="widget__title">{data.title}</span>
            <span className="widget__counter">{data.isMoney && "$"} {amount}</span>
            <span className="widget__link">{data.link}</span>
        </div>
        <div className="widget__right">
            <div className="widget__percentage positive">
                <KeyboardArrowUp />
                {percentage}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget