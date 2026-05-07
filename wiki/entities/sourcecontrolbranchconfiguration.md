---
logical: "sourcecontrolbranchconfiguration"
display: "Source Control Branch Configuration"
entitySetName: "sourcecontrolbranchconfigurations"
primaryId: "sourcecontrolbranchconfigurationid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Source Control Branch Configuration

Stores the source control branch configuration associated with the organization or solution

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolbranchconfiguration` |
| Display name | Source Control Branch Configuration |
| Display (plural) | Source Control Branch Configurations |
| Schema name | `SourceControlBranchConfiguration` |
| Entity set (Web API) | `sourcecontrolbranchconfigurations` |
| Primary id attribute | `sourcecontrolbranchconfigurationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolbranchconfigurations?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolbranchconfigurations(<guid>)
POST /api/data/v9.2/sourcecontrolbranchconfigurations
PATCH /api/data/v9.2/sourcecontrolbranchconfigurations(<guid>)
DELETE /api/data/v9.2/sourcecontrolbranchconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`BranchName`, `BranchSyncedCommitId`, `BranchSyncedTime`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `PartitionId`, `RootFolderPath`, `SourceControlBranchConfigurationId`, `SourceControlConfigurationId`, `SourceControlConfigurationIdPId`, `StatusCode`, `TTLInSeconds`, `UpstreamBranchName`, `UpstreamBranchSyncedCommitId`, `UpstreamBranchSyncedTime`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolbranchconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolbranchconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolbranchconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolbranchconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sourcecontrolconfiguration_sourcecontrolbranchconfiguration` | [sourcecontrolconfiguration](sourcecontrolconfiguration.md) | `sourcecontrolconfigurationid` | `sourcecontrolconfigurationid` |



## Source

Generated from [sourcecontrolbranchconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sourcecontrolbranchconfiguration.md) on 2026-05-06.