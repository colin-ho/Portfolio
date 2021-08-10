import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius:10px;
    background: ${({primary})=> (primary ? '#B4CDED':'#0D1821')};
    white-space:nowrap;
    padding: ${({big})=> (big ? '14px 48px':'12px 30px')};
    color:${({dark})=> (dark ? '#0D1821':'#ededed')};
    font-size:${({fontBig})=> (fontBig ? '20px':'16px')};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;
    line-height: 22px;

    &:hover{
        transition:all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#ededed':'#B4CDED')};
    }
`;