---
logical: "msdyn_casetopic"
display: "Case Topic"
entitySetName: "msdyn_casetopics"
primaryId: "msdyn_casetopicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Topic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopic` |
| Display name | Case Topic |
| Display (plural) | Case Topics |
| Schema name | `msdyn_casetopic` |
| Entity set (Web API) | `msdyn_casetopics` |
| Primary id attribute | `msdyn_casetopicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casetopics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casetopics(<guid>)
POST /api/data/v9.2/msdyn_casetopics
PATCH /api/data/v9.2/msdyn_casetopics(<guid>)
DELETE /api/data/v9.2/msdyn_casetopics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_casetopicId`, `msdyn_name`, `msdyn_SimilarityScore`, `msdyn_TopicCounts`, `msdyn_TopicDate`, `msdyn_TopicPercentage`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopic` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casetopic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid` | _n/a_ | `msdyn_casetopicid` | _n/a_ |


## Source

Generated from [msdyn_casetopic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casetopic.md) on 2026-05-06.