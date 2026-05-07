---
logical: "stagedrelationship"
display: "Relazione di staging"
entitySetName: "stagedrelationships"
primaryId: "stagedrelationshipid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazione di staging

Archivia i metadati della relazione di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedrelationship` |
| Display name | Relazione di staging |
| Display (plural) | Relazioni di staging |
| Schema name | `StagedRelationship` |
| Entity set (Web API) | `stagedrelationships` |
| Primary id attribute | `stagedrelationshipid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedrelationships?$select=name&$top=10
GET /api/data/v9.2/stagedrelationships(<guid>)
POST /api/data/v9.2/stagedrelationships
PATCH /api/data/v9.2/stagedrelationships(<guid>)
DELETE /api/data/v9.2/stagedrelationships(<guid>)
```

## Attributes

Writable: **34** · Read-only: **8**

### Writable

`cascadearchive`, `cascadeassign`, `cascadedelete`, `cascadelinkmask`, `cascademerge`, `cascadereparent`, `cascaderollupview`, `cascadeshare`, `cascadeunshare`, `componentstate`, `entitykeyid`, `importsequencenumber`, `iscustomrelationship`, `islogical`, `isrelationshipattributedenormalized`, `isvalidforadvancedfind`, `name`, `overriddencreatedon`, `overwritetime`, `recordid`, `referencedattributeid`, `referencedentityid`, `referencingattributeid`, `referencingentityid`, `relationshiprowid`, `relationshiptype`, `solutionid`, `stagedrelationshipid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `supportingsolutionid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `introducedversion`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedrelationship_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedrelationship_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedrelationship_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedrelationship_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedrelationship_SyncErrors` | [stagedrelationship](stagedrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedrelationship` |
| `stagedrelationship_AsyncOperations` | [stagedrelationship](stagedrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedrelationship` |
| `stagedrelationship_MailboxTrackingFolders` | [stagedrelationship](stagedrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedrelationship` |
| `stagedrelationship_UserEntityInstanceDatas` | [stagedrelationship](stagedrelationship.md) | `objectid` | `objectid_stagedrelationship` |
| `stagedrelationship_ProcessSession` | [stagedrelationship](stagedrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedrelationship` |
| `stagedrelationship_BulkDeleteFailures` | [stagedrelationship](stagedrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedrelationship` |
| `stagedrelationship_PrincipalObjectAttributeAccesses` | [stagedrelationship](stagedrelationship.md) | `objectid` | `objectid_stagedrelationship` |


## Source

Generated from [stagedrelationship (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedrelationship')) on 2026-05-07.