---
logical: "msdyn_evaluationlocalizedcontent"
display: "Contenuto localizzato valutazione"
entitySetName: "msdyn_evaluationlocalizedcontents"
primaryId: "msdyn_evaluationlocalizedcontentid"
primaryName: "msdyn_metadataid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contenuto localizzato valutazione

Contenuto localizzato utilizzato per le valutazioni.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationlocalizedcontent` |
| Display name | Contenuto localizzato valutazione |
| Display (plural) | Contenuto localizzato valutazione |
| Schema name | `msdyn_EvaluationLocalizedContent` |
| Entity set (Web API) | `msdyn_evaluationlocalizedcontents` |
| Primary id attribute | `msdyn_evaluationlocalizedcontentid` |
| Primary name attribute | `msdyn_metadataid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationlocalizedcontents?$select=msdyn_metadataid&$top=10
GET /api/data/v9.2/msdyn_evaluationlocalizedcontents(<guid>)
POST /api/data/v9.2/msdyn_evaluationlocalizedcontents
PATCH /api/data/v9.2/msdyn_evaluationlocalizedcontents(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationlocalizedcontents(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_content`, `msdyn_evaluationlocalizedcontentid`, `msdyn_languagecode`, `msdyn_metadataid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationlocalizedcontent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationlocalizedcontent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationlocalizedcontent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationlocalizedcontent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationlocalizedcontent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationlocalizedcontent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationlocalizedcontent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationlocalizedcontent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationlocalizedcontent_SyncErrors` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationlocalizedcontent` |
| `msdyn_evaluationlocalizedcontent_AsyncOperations` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationlocalizedcontent` |
| `msdyn_evaluationlocalizedcontent_MailboxTrackingFolders` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationlocalizedcontent` |
| `msdyn_evaluationlocalizedcontent_UserEntityInstanceDatas` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `objectid` | `objectid_msdyn_evaluationlocalizedcontent` |
| `msdyn_evaluationlocalizedcontent_ProcessSession` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationlocalizedcontent` |
| `msdyn_evaluationlocalizedcontent_BulkDeleteFailures` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationlocalizedcontent` |
| `msdyn_evaluationlocalizedcontent_PrincipalObjectAttributeAccesses` | [msdyn_evaluationlocalizedcontent](msdyn_evaluationlocalizedcontent.md) | `objectid` | `objectid_msdyn_evaluationlocalizedcontent` |


## Source

Generated from [msdyn_evaluationlocalizedcontent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationlocalizedcontent')) on 2026-05-07.