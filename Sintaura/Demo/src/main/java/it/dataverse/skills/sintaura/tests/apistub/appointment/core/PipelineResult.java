package it.dataverse.skills.sintaura.tests.apistub.appointment.core;

public final class PipelineResult {

    private final int processed;
    private final int skipped;
    private final int failed;

    public PipelineResult(int processed, int skipped, int failed) {
        this.processed = processed;
        this.skipped = skipped;
        this.failed = failed;
    }

    public int processed() { return processed; }
    public int skipped()   { return skipped; }
    public int failed()    { return failed; }

    @Override
    public String toString() {
        return "PipelineResult{processed=" + processed + ", skipped=" + skipped + ", failed=" + failed + "}";
    }
}
