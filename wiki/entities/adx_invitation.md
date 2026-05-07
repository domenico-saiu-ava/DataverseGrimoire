---
logical: "adx_invitation"
display: "Invitation"
entitySetName: "adx_invitations"
primaryId: "adx_invitationid"
primaryName: "adx_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Invitation

Send invitations to existing contacts or email addresses and assign them to web roles upon redemption.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_invitation` |
| Display name | Invitation |
| Display (plural) | Invitations |
| Schema name | `adx_invitation` |
| Entity set (Web API) | `adx_invitations` |
| Primary id attribute | `adx_invitationid` |
| Primary name attribute | `adx_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_invitations?$select=adx_name&$top=10
GET /api/data/v9.2/adx_invitations(<guid>)
POST /api/data/v9.2/adx_invitations
PATCH /api/data/v9.2/adx_invitations(<guid>)
DELETE /api/data/v9.2/adx_invitations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`adx_assignToAccount`, `adx_expiryDate`, `adx_invitationCode`, `adx_invitationId`, `adx_inviteContact`, `adx_invitercontact`, `adx_maximumRedemptions`, `adx_name`, `adx_redeemedContact`, `adx_redemptions`, `adx_redemptionWorkflow`, `adx_type`, `ImportSequenceNumber`, `mspp_websiteid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_assigntoaccount` | [account](account.md) | `adx_assigntoaccount` | `adx_assignToAccount` |
| `adx_invitation_invitecontact` | [contact](contact.md) | `adx_invitecontact` | `adx_inviteContact` |
| `adx_invitation_invitercontact` | [contact](contact.md) | `adx_invitercontact` | `adx_invitercontact` |
| `adx_invitation_redeemedContact` | [contact](contact.md) | `adx_redeemedcontact` | `adx_redeemedContact` |
| `adx_invitation_redemptionworkflow` | [workflow](workflow.md) | `adx_redemptionworkflow` | `adx_redemptionWorkflow` |
| `business_unit_adx_invitation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_adx_invitation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_invitation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_invitation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_invitation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_adx_invitation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerpagesite_mspp_websiteid_adx_invitation` | [powerpagesite](powerpagesite.md) | `mspp_websiteid` | `mspp_websiteid` |
| `team_adx_invitation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_adx_invitation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `adx_invitation_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_connections1` | _n/a_ | `record1id` | _n/a_ |
| `adx_invitation_connections2` | _n/a_ | `record2id` | _n/a_ |
| `adx_invitation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `adx_invitation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `adx_invitation_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adx_invitation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_invitation_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_invitecontacts` | [adx_invitationid](adx_invitationid.md) | _n/a_ | _n/a_ |
| `adx_invitation_mspp_webrole_powerpagecomponent` | [adx_invitationid](adx_invitationid.md) | _n/a_ | _n/a_ |
| `adx_invitation_redeemedcontacts` | [adx_invitationid](adx_invitationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [adx_invitation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/adx_invitation.md) on 2026-05-06.