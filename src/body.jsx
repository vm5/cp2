import React, { useState, useEffect } from 'react';

const DummyAlumni = [
  { company: 'Walmart', designation: 'Software Dvelopment Engineer' },
  { company: 'Deloitte', designation: 'Solution Delivery Analyst' },
  { company: 'HCL Software', designation: 'Product Manager' },
  { company: 'Oracle', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Tech Consultant' },
  { company: 'Cisco', designation: 'Big Data Analytics Engineer' },
  { company: 'IBM', designation: 'Software Development Engineer' },
  { company: 'SAP Labs', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Associate consultant' },
  { company: 'Epsilon', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack Developer' },
  { company: 'Cloudera', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack developer' },
  { company: 'Mercedes Benz Research and Development', designation: 'Data Engineer' },
  { company: 'PwC', designation: 'Associate' },
  { company: 'Paypal', designation: 'Target Corporation' },
  { company: 'GE', designation: 'Software Dvelopment Engineer' },
  { company: 'Allo Health', designation: 'Software Development Engineer' },
  { company: 'GSK', designation: 'Software Development Engineer' },
  { company: 'Autodesk', designation: 'Software Development Engineer' },
  { company: 'Target', designation: 'Software Development Engineer' },
  { company: 'KPMG India', designation: 'Data Analyst' },
  { company: 'Arcesium', designation: 'Software Development Engineer' },
  { company: 'Games 24x7', designation: 'Software Development Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Data Scientist' },
  { company: 'Change Jar Technologies', designation: 'Software Development Engineer' },
  { company: 'LAM Research', designation: 'IT Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Software Dvelopment Engineer' },
  { company: 'Consillio', designation: 'Software Dvelopment Engineer' },
  { company: 'Blue Yonder', designation: 'Software Dvelopment Engineer' },
  { company: 'Indian Navy', designation: 'Sub Lieutenant' },
  { company: 'IIT Kanpur', designation: 'PhD' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Commvault', designation: 'Software Dvelopment Engineer' },
  { company: 'Tejas Networks', designation: 'Software Dvelopment Engineer' },
  { company: 'Akamai Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'CGI', designation: 'Software Dvelopment Engineer' },
  { company: 'Hewlett Packard Enterprise', designation: 'Cloud Dveloper' },
  { company: 'TruckX', designation: 'Senior Software Dvelopment Engineer' },
  { company: 'IBM', designation: 'Software Dvelopment Engineer' },
  { company: 'Universal automation solutions private limited', designation: 'Software Dvelopment Engineer' },
  { company: 'Reliance', designation: 'Software Dvelopment Engineer' },
  { company: 'Tesco', designation: 'Software Dvelopment Engineer' },
  { company: 'Mercedes Benz Research and Development ', designation: 'Software Dvelopment Engineer' },
  { company: 'Via Play Group', designation: 'Data Engineer' },
];
const Body = () => {
  const [company, setCompany] = useState('');
  const [searchType, setSearchType] = useState('learn');
  const [message, setMessage] = useState('');
  const [foundAlumni, setFoundAlumni] = useState([]);
  const [redirectLink, setRedirectLink] = useState('');

  useEffect(() => {
    if (redirectLink) {
      window.location.href = redirectLink;
    }
  }, [redirectLink]);

  const handleSearch = () => {
    const foundAlumni = DummyAlumni.filter(alumnus => alumnus.company.toLowerCase() === company.toLowerCase());

    if (foundAlumni.length > 0) {
      const links = {
        learn: 'https://chatpeslinkedform.vercel.app/',
        prepare: 'https://connectpesinterview.vercel.app/',
      };

      setRedirectLink(links[searchType] || '');
      setMessage('');
    } else {
      setRedirectLink('');
      setMessage('No Alumni found in the organization you searched for!');
    }
  };

  const uniqueCompanies = [...new Set(DummyAlumni.map(alumnus => alumnus.company))];

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.searchSection}>
          <h1 style={styles.heading}>Student Search</h1>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="learn"
                checked={searchType === 'learn'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>You are looking forward to applying for the organization but you require a few details about how it is going to be like to work there</span>
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="prepare"
                checked={searchType === 'prepare'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>You have received an interview call and want tips on how to go about it</span>
            </label>
          </div>
          <input
            type="text"
            list="companySuggestions"
            placeholder="Search by Organization Name...."
            style={styles.input}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <datalist id="companySuggestions">
            {uniqueCompanies.map((company, index) => (
              <option key={index} value={company} />
            ))}
          </datalist>
          <button style={styles.button} onClick={handleSearch}>Search</button>
          {message && <p style={styles.message}>{message}</p>}
          <div style={styles.contentRow}>
            {foundAlumni.length > 0 && (
              foundAlumni.map((alumnus, index) => (
                <div key={index} style={styles.textContainer}>
                  <p><strong>Company:</strong> {alumnus.company}</p>
                  <p><strong>Designation:</strong> {alumnus.designation}</p>
                </div>
              ))
            )}
          </div>
        </section>
        <section style={styles.companySection}>
          <h2 style={styles.companyHeading}>Organizations our Alumni are a part of:</h2>
          <div style={styles.companyList}>
            {uniqueCompanies.map((company, index) => (
              <div key={index} style={styles.companyContainer}>
                <strong>{company}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2rem',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'LightCyan',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Coneria',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease-in-out',
    minHeight: '300px',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '1.25rem',
    color: '#333',
    fontFamily: 'Coneria',
    animation: 'fadeIn 1s ease-in-out',
  },
  input: {
    marginBottom: '1.25rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ddd',
    width: '100%',
    fontSize: '1rem',
    fontFamily: 'Coneria',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    fontFamily: 'Coneria',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
  message: {
    marginTop: '1.25rem',
    fontSize: '1.125rem',
    color: '#d9534f',
    fontFamily: 'Coneria',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '1.25rem',
    fontSize: '1rem',
    width: '100%',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.75rem',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'Coneria',
  },
  radioInput: {
    marginRight: '0.5rem',
    accentColor: '#007BFF',
    fontFamily: 'Coneria',
  },
  radioText: {
    fontSize: '1rem',
    fontFamily: 'Coneria',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.25rem',
    width: '100%',
  },
  textContainer: {
    flex: '1 1 60%',
    margin: '0 1rem',
    fontSize: '1rem',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    padding: '1.25rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
    minHeight: '12.5rem',
    overflow: 'visible',
    fontFamily: 'Coneria',
    animation: 'fadeIn 1s ease-in-out',
  },
  h2: {
    fontFamily: 'Coneria',
  },
  companySection: {
    marginTop: '2.5rem',
    width: '100%',
    textAlign: 'center',
  },
  companyHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Coneria',
    animation: 'fadeIn 1s ease-in-out',
  },
  companyList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    color: 'blue',
  },
  companyContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    fontFamily: 'Coneria',
    transition: 'transform 0.3s ease',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '0.5rem',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    fontFamily: 'Coneria',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    margin: '1.25rem 0',
  },
  '@media (max-width: 768px)': {
    searchSection: {
      padding: '1rem',
    },
    heading: {
      fontSize: '1.5rem',
    },
    radioGroup: {
      fontSize: '0.875rem',
    },
    input: {
      fontSize: '0.875rem',
      padding: '0.5rem',
    },
    button: {
      fontSize: '0.875rem',
      padding: '0.5rem 1rem',
    },
    message: {
      fontSize: '1rem',
    },
    textContainer: {
      fontSize: '0.875rem',
      padding: '1rem',
    },
    companyHeading: {
      fontSize: '1.25rem',
    },
    companyList: {
      gap: '0.5rem',
    },
    companyContainer: {
      fontSize: '1rem',
    },
  },
};

export default Body;