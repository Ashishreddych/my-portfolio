import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2.5rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      padding: 3rem;
      transition: transform 0.3s ease;
      color: #FFF;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      
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
        
        .project-links {
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
        margin-top: auto;
        
        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.7;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
  }

  @media (max-width: 740px) {
    margin-top: 10rem;
    padding: 0 2rem;
    
    h2 {
      font-size: 3.2rem;
      margin-bottom: 4rem;
    }

    .projects {
      grid-template-columns: 1fr;
      gap: 2rem;
      
      .project {
        padding: 2.5rem 2rem;
        
        header {
          flex-direction: column;
          gap: 1.5rem;
          
          .project-links {
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