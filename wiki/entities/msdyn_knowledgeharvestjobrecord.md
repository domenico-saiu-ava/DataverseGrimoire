---
logical: "msdyn_knowledgeharvestjobrecord"
display: "Knowledge Harvest Job Record"
entitySetName: "msdyn_knowledgeharvestjobrecords"
primaryId: "msdyn_knowledgeharvestjobrecordid"
primaryName: "msdyn_entityids"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Harvest Job Record

Tracking entity record used to trigger the harvesting process for knowledge articles

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgeharvestjobrecord` |
| Display name | Knowledge Harvest Job Record |
| Display (plural) | Knowledge Harvest Job Records |
| Schema name | `msdyn_knowledgeharvestjobrecord` |
| Entity set (Web API) | `msdyn_knowledgeharvestjobrecords` |
| Primary id attribute | `msdyn_knowledgeharvestjobrecordid` |
| Primary name attribute | `msdyn_entityids` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgeharvestjobrecords?$select=msdyn_entityids&$top=10
GET /api/data/v9.2/msdyn_knowledgeharvestjobrecords(<guid>)
POST /api/data/v9.2/msdyn_knowledgeharvestjobrecords
PATCH /api/data/v9.2/msdyn_knowledgeharvestjobrecords(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgeharvestjobrecords(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_additionalinformation`, `msdyn_entityids`, `msdyn_entityname`, `msdyn_knowledgeharvestjobrecordId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgeharvestjobrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgeharvestjobrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgeharvestjobrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgeharvestjobrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgeharvestjobrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_knowledgeharvestjobrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgeharvestjobrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgeharvestjobrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgeharvestjobrecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeharvestjobrecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeharvestjobrecord_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeharvestjobrecord_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgeharvestjobrecord_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgeharvestjobrecord_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgeharvestjobrecord.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgeharvestjobrecord.md) on 2026-05-06.