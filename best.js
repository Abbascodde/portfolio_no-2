const downloadBtn  = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = './resume/My resume updated-001.pdf';
  // link.download = 'My resume updated-001.pdf';
  link.click();

  try {
    link.click();
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please check file path and browser security settings.');
  }

});

const downloadCv = document.getElementById('cv');

downloadCv.addEventListener('click', () => {
  const downloadMyCv =document.createElement ('a');
  downloadMyCv.href = './resume/My resume updated-001.pdf';
  downloadMyCv.download = './resume/My resume updated-001.pdf';
  downloadMyCv.click();

  try {
    downloadMyCv.click();
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please check file path and browser security settings.');
  };
});

const contactForm = document.getElementById('contact-form')