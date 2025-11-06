import { useEffect, useState } from 'react';
import { getCharacters } from '../services/rmApi';

export default function Entities() {
  const [data, setData] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await getCharacters(page);
      setData(res);
      setLoading(false);
    };
    load();
  }, [page]);

  return (
    <section className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Entities</h2>
        <small className="text-muted"> nombre, status y especie</small>
      </div>

      {loading ? (
        <div className="spinner-border" role="status" style={{ marginInline: 'auto' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="list-group">
          {data.results.map(c => (
            <div key={c.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <span><strong>{c.name}</strong></span>
              <span className="badge text-bg-secondary">{c.status}</span>
              <span className="text-muted">{c.species}</span>
            </div>
          ))}
        </div>
      )}

      <nav className="mt-4" aria-label="Entities pagination">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
          </li>
          <li className="page-item"><button className="page-link active">{page}</button></li>
          <li className={`page-item ${page === data.info?.pages ? 'disabled' : ''}`}>
            <button className="page-link" disabled={page === data.info?.pages} onClick={() => setPage((p) => p + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
