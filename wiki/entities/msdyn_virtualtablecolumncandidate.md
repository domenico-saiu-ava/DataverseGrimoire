---
logical: "msdyn_virtualtablecolumncandidate"
display: "Virtual Table Column Candidate"
entitySetName: "msdyn_virtualtablecolumncandidates"
primaryId: "msdyn_virtualtablecolumncandidateid"
primaryName: "msdyn_externalname"
tableType: "Standard"
ownership: "UserOwned"
---

# Virtual Table Column Candidate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_virtualtablecolumncandidate` |
| Display name | Virtual Table Column Candidate |
| Display (plural) | Virtual Table Column Candidates |
| Schema name | `msdyn_virtualtablecolumncandidate` |
| Entity set (Web API) | `msdyn_virtualtablecolumncandidates` |
| Primary id attribute | `msdyn_virtualtablecolumncandidateid` |
| Primary name attribute | `msdyn_externalname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_virtualtablecolumncandidates?$select=msdyn_externalname&$top=10
GET /api/data/v9.2/msdyn_virtualtablecolumncandidates(<guid>)
POST /api/data/v9.2/msdyn_virtualtablecolumncandidates
PATCH /api/data/v9.2/msdyn_virtualtablecolumncandidates(<guid>)
DELETE /api/data/v9.2/msdyn_virtualtablecolumncandidates(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_DisplayName`, `msdyn_externalname`, `msdyn_SchemaName`, `msdyn_virtualtablecolumncandidateId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_virtualtablecolumncandidate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_virtualtablecolumncandidate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_virtualtablecolumncandidate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_virtualtablecolumncandidate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_virtualtablecolumncandidate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_virtualtablecolumncandidate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_virtualtablecolumncandidate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_virtualtablecolumncandidate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_virtualtablecolumncandidate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_virtualtablecolumncandidate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_virtualtablecolumncandidate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_virtualtablecolumncandidate.md) on 2026-05-06.