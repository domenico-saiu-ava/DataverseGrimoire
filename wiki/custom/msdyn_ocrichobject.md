---
logical: "msdyn_ocrichobject"
display: "Messaggio RTF"
entitySetName: "msdyn_ocrichobjects"
primaryId: "msdyn_ocrichobjectid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Messaggio RTF

Messaggi RTF per l'integrazione di Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrichobject` |
| Display name | Messaggio RTF |
| Display (plural) | Messaggi RTF |
| Schema name | `msdyn_ocrichobject` |
| Entity set (Web API) | `msdyn_ocrichobjects` |
| Primary id attribute | `msdyn_ocrichobjectid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocrichobjects?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocrichobjects(<guid>)
POST /api/data/v9.2/msdyn_ocrichobjects
PATCH /api/data/v9.2/msdyn_ocrichobjects(<guid>)
DELETE /api/data/v9.2/msdyn_ocrichobjects(<guid>)
```

## Attributes

Writable: **17** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_allowagenttoedit`, `msdyn_description`, `msdyn_locale`, `msdyn_name`, `msdyn_objectjson`, `msdyn_ocrichobjectgroupid`, `msdyn_ocrichobjectid`, `msdyn_ocrichobjecttype`, `msdyn_streamsource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_objectjsonfile`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocrichobject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrichobject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrichobject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrichobject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocrichobject` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocrichobject` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocrichobject` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocrichobject` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ocrichobject_msdyn_objectjsonfile` | [fileattachment](fileattachment.md) | `msdyn_objectjsonfile` | `msdyn_objectjsonfile` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocrichobject_msdyn_ocrichobjectmap` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `msdyn_ocmappedrichobjid` | `msdyn_ocmappedrichobjid` |
| `msdyn_ocrichobject_SyncErrors` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_DuplicateMatchingRecord` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_DuplicateBaseRecord` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `baserecordid` | `baserecordid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_AsyncOperations` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_MailboxTrackingFolders` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_UserEntityInstanceDatas` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `objectid` | `objectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_ProcessSession` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_BulkDeleteFailures` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_PrincipalObjectAttributeAccesses` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `objectid` | `objectid_msdyn_ocrichobject` |
| `msdyn_ocrichobject_FileAttachments` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | `objectid` | `objectid_msdyn_ocrichobject` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocrichobject_liveworkstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | _n/a_ | `msdyn_msdyn_ocrichobject_liveworkstream` |
| `msdyn_msdyn_ocrichobject_msdyn_octag` | [msdyn_octag](msdyn_octag.md) | _n/a_ | `msdyn_msdyn_ocrichobject_msdyn_octag` |

## Source

Generated from [msdyn_ocrichobject (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocrichobject')) on 2026-05-07.