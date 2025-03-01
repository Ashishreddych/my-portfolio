import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2.5rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
  }

  .experiences {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .experience {
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      padding: 3rem;
      transition: transform 0.3s ease;
      color: #FFF;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: var(--blue);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateX(10px);
        
        &::before {
          opacity: 1;
        }
      }

      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 2.5rem;
        
        .experience-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-shrink: 0;
        }
        
        a > img {
          width: 4rem;
          transition: transform 0.2s ease;
          
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      
      h3 {
        font-size: 2.4rem;
        margin-bottom: 2rem;
        line-height: 1.3;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.7;
        letter-spacing: 0.12rem;
        margin-bottom: 3rem;
        
        a {
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          font-size: 1.6rem;
          opacity: 0.7;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;
    padding: 0 2rem;
    
    h2 {
      font-size: 3.2rem;
      margin-bottom: 4rem;
    }

    .experiences {
      gap: 3rem;
      
      .experience {
        padding: 2.5rem 2rem;
        
        header {
          flex-direction: column;
          gap: 1.5rem;
          
          .experience-links {
            width: 100%;
            justify-content: flex-start;
          }
        }
        
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`