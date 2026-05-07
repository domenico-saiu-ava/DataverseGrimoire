---
logical: "stagedentityattribute"
display: "Attributo entità di staging"
entitySetName: "stagedentityattributes"
primaryId: "stagedentityattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attributo entità di staging

Archivia i metadati dell'attributo dell'entità di staging da elaborare in modalità asincrona.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentityattribute` |
| Display name | Attributo entità di staging |
| Display (plural) | Attributo entità di staging |
| Schema name | `StagedEntityAttribute` |
| Entity set (Web API) | `stagedentityattributes` |
| Primary id attribute | `stagedentityattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentityattributes?$select=name&$top=10
GET /api/data/v9.2/stagedentityattributes(<guid>)
POST /api/data/v9.2/stagedentityattributes
PATCH /api/data/v9.2/stagedentityattributes(<guid>)
DELETE /api/data/v9.2/stagedentityattributes(<guid>)
```

## Attributes

Writable: **24** · Read-only: **8**

### Writable

`attributedescription`, `attributeof`, `attributetypeid`, `componentstate`, `entityid`, `externalname`, `hasmultiplelabels`, `importsequencenumber`, `islogical`, `ispkattribute`, `logicalname`, `name`, `originallocalizedescription`, `originallocalizedname`, `overriddencreatedon`, `physicalname`, `solutionid`, `stagedentityattributeid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `validforreadapi`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentityattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentityattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentityattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentityattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentityattribute_SyncErrors` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedentityattribute_AsyncOperations` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedentityattribute_MailboxTrackingFolders` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedentityattribute_UserEntityInstanceDatas` | [stagedentityattribute](stagedentityattribute.md) | `objectid` | `objectid_stagedentityattribute` |
| `stagedentityattribute_ProcessSession` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedentityattribute_BulkDeleteFailures` | [stagedentityattribute](stagedentityattribute.md) | `regardingobjectid` | `regardingobjectid_stagedentityattribute` |
| `stagedentityattribute_PrincipalObjectAttributeAccesses` | [stagedentityattribute](stagedentityattribute.md) | `objectid` | `objectid_stagedentityattribute` |


## Source

Generated from [stagedentityattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedentityattribute')) on 2026-05-07.