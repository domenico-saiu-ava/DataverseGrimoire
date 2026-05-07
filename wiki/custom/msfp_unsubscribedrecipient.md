---
logical: "msfp_unsubscribedrecipient"
display: "Destinatario non abbonato di Customer Voice"
entitySetName: "msfp_unsubscribedrecipients"
primaryId: "msfp_unsubscribedrecipientid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Destinatario non abbonato di Customer Voice

Indirizzo e-mail di un intervistato con iscrizione annullata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_unsubscribedrecipient` |
| Display name | Destinatario non abbonato di Customer Voice |
| Display (plural) | Destinatari senza abbonamento di Customer Voice |
| Schema name | `msfp_unsubscribedrecipient` |
| Entity set (Web API) | `msfp_unsubscribedrecipients` |
| Primary id attribute | `msfp_unsubscribedrecipientid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_unsubscribedrecipients?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_unsubscribedrecipients(<guid>)
POST /api/data/v9.2/msfp_unsubscribedrecipients
PATCH /api/data/v9.2/msfp_unsubscribedrecipients(<guid>)
DELETE /api/data/v9.2/msfp_unsubscribedrecipients(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_emailaddress`, `msfp_name`, `msfp_unsubscribedrecipientid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_unsubscribedrecipient_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_unsubscribedrecipient_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_unsubscribedrecipient_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_unsubscribedrecipient_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_unsubscribedrecipient` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_unsubscribedrecipient` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_unsubscribedrecipient` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_unsubscribedrecipient` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_unsubscribedrecipient_SyncErrors` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `regardingobjectid` | `regardingobjectid_msfp_unsubscribedrecipient` |
| `msfp_unsubscribedrecipient_AsyncOperations` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `regardingobjectid` | `regardingobjectid_msfp_unsubscribedrecipient` |
| `msfp_unsubscribedrecipient_MailboxTrackingFolders` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `regardingobjectid` | `regardingobjectid_msfp_unsubscribedrecipient` |
| `msfp_unsubscribedrecipient_UserEntityInstanceDatas` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `objectid` | `objectid_msfp_unsubscribedrecipient` |
| `msfp_unsubscribedrecipient_ProcessSession` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `regardingobjectid` | `regardingobjectid_msfp_unsubscribedrecipient` |
| `msfp_unsubscribedrecipient_BulkDeleteFailures` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `regardingobjectid` | `regardingobjectid_msfp_unsubscribedrecipient` |
| `msfp_unsubscribedrecipient_PrincipalObjectAttributeAccesses` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `objectid` | `objectid_msfp_unsubscribedrecipient` |
| `msfp_msfp_unsubscribedrecipient_msfp_surveyinvite` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `msfp_unsubscribedrecipientsurveyinviteid` | `msfp_UnsubscribedRecipientSurveyInviteId_msfp_surveyinvite` |


## Source

Generated from [msfp_unsubscribedrecipient (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_unsubscribedrecipient')) on 2026-05-07.