import JobItem from './JobItem';

function JobList({filteredJobs,handleDelete,handleEdit}){

  return (
    <div className="job-list">
      <ul className='container'>
        {filteredJobs.map(job => (
          <JobItem key={job.id} job={job} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
}

export default JobList;
