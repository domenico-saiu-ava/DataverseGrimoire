---
logical: "msdyn_ocsystemmessage"
display: "Messaggio automatico"
entitySetName: "msdyn_ocsystemmessages"
primaryId: "msdyn_ocsystemmessageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Messaggio automatico

Archivia i messaggi di sistema inviati al destinatario del messaggio per vari eventi.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsystemmessage` |
| Display name | Messaggio automatico |
| Display (plural) | Messaggi automatici |
| Schema name | `msdyn_ocsystemmessage` |
| Entity set (Web API) | `msdyn_ocsystemmessages` |
| Primary id attribute | `msdyn_ocsystemmessageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsystemmessages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsystemmessages(<guid>)
POST /api/data/v9.2/msdyn_ocsystemmessages
PATCH /api/data/v9.2/msdyn_ocsystemmessages(<guid>)
DELETE /api/data/v9.2/msdyn_ocsystemmessages(<guid>)
```

## Attributes

Writable: **22** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_defaultlanguage`, `msdyn_instanceid`, `msdyn_isrecurring`, `msdyn_isrepeatlimited`, `msdyn_messagedescription`, `msdyn_messageinterval`, `msdyn_messagereceiver`, `msdyn_messagetemplatetrigger`, `msdyn_messagetext`, `msdyn_messagetype`, `msdyn_name`, `msdyn_ocsystemmessageid`, `msdyn_repeatcount`, `msdyn_startdelay`, `msdyn_streamsource`, `msdyn_systemmessageeventtype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsystemmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsystemmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsystemmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsystemmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_ocsystemmessage` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_defaultlanguage` | `msdyn_defaultlanguage` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsystemmessage_SyncErrors` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_DuplicateMatchingRecord` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_DuplicateBaseRecord` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `baserecordid` | `baserecordid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_AsyncOperations` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_MailboxTrackingFolders` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_UserEntityInstanceDatas` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `objectid` | `objectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_ProcessSession` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_BulkDeleteFailures` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `objectid` | `objectid_msdyn_ocsystemmessage` |
| `msdyn_ocsystemmessage_msdyn_oclocalizationdata` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | `msdyn_systemmessageid` | `msdyn_systemmessageid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` | [msdyn_channelprofile](msdyn_channelprofile.md) | _n/a_ | `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` |

## Source

Generated from [msdyn_ocsystemmessage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsystemmessage')) on 2026-05-07.