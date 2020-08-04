function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchnamafilm = function (keyword) {
    var filterednamafilm = namafilm.filter(function (namafilm) {
        return film.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        this.onFailed(keyword + " is not found");
    }
};